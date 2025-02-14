type SchemaType = {
  type: string;
  blocks?: Record<string, SchemaType>;
} & Record<string, unknown>;

export type PageContextOptions = {
  queries?: Record<string, Record<string, unknown>>;
  schema: Record<string, SchemaType>;
};

export class PageContext {
  queries: Record<string, Record<string, unknown>>;
  registry: Record<string, Block> = {};
  _context: Record<string, Record<string, unknown>> = {};
  // private dependencyGraph: Record<string, string[]> = {};

  constructor(options: PageContextOptions) {
    this.queries = options.queries ?? {};

    for (const [id, payload] of Object.entries(options.schema)) {
      new Block(this, { id, ...payload });
    }

    // Generating the initial context
    for (const block of Object.values(this.registry)) {
      block.toJSON();
    }
  }

  register(block: Block) {
    this.registry[block.id] = block;
  }

  update(key: string, value: string) {
    const [blockId, property] = key.split(".");

    if (!blockId || !property) return;

    this.registry[blockId]?.update(property, value);
  }

  get context() {
    return this._context;
  }
}

class Block {
  context: PageContext;
  id: string;
  type: string;
  blocks: Record<string, Block>;
  properties: Record<string, Property>;

  constructor(context: PageContext, payload: SchemaType & { id: string }) {
    const { id, type, blocks, ...properties } = payload;

    this.context = context;
    this.id = id;
    this.type = type;
    this.blocks = {};
    this.properties = {};

    for (const key in properties) {
      this.properties[key] = new Property(this, key, String(properties[key]));
    }

    if (blocks) {
      for (const [key, blockPayload] of Object.entries(blocks)) {
        this.blocks[key] = new Block(this.context, {
          id: key,
          ...blockPayload,
        });
      }
    }

    // Registring the block
    this.context.register(this);
  }

  update(key: string, value: string) {
    if (this.properties[key]) this.properties[key].value = value;
    else this.addProperty(key, value);

    this.toJSON({ force: true });
  }

  addProperty(key: string, value: string) {
    // TODO: check if the property even exists for this block
    this.properties[key] = new Property(this, key, value);
  }

  toJSON({ force }: { force?: boolean } = {}): Record<string, unknown> {
    const cache = this.context._context[this.id];
    if (cache && !force) return cache;

    const payload: Record<string, unknown> = {
      id: this.id,
      type: this.type,
    };

    for (const [key, property] of Object.entries(this.properties)) {
      payload[key] = property.value;
    }

    this.context._context[this.id] = payload;

    return payload;
  }
}

// TODO: find the variable in the string, Eg. '_.sum(components.tag1)' => 'components.tag1'
class Property {
  block: Block;
  isDynamic = false;

  /**
   * The list of properties that this property depends on
   */
  dependecies?: (string | Property)[];

  /**
   * The list of properties that depend on this property
   */
  dependent: Property[] = [];
  private _value: string;

  constructor(
    block: Block,
    public key: string,
    value: string,
  ) {
    this.block = block;
    this._value = value;

    this.analyze();
  }

  analyze() {
    const variables = findVariable(this._value);

    if (variables?.length) {
      this.isDynamic = true;
      this.dependecies = variables;
    } else {
      this.isDynamic = false;
      this.dependecies = undefined;
    }
  }

  get value() {
    if (this.isDynamic) {
      return Function(
        `const components = arguments[0]; return ${cleanupExpression(this._value)}`,
      )(this.generateContextForValue());
    }

    return this._value;
  }

  set value(val: string) {
    this._value = val;

    this.analyze();

    if (this.isDynamic) this.connectDependencies();

    // Notify all dependent properties
    for (const dependent of this.dependent) {
      dependent.block.toJSON({ force: true });
    }
  }

  private generateContextForValue() {
    if (!this.dependecies) return {};

    const isConnected = this.dependecies.every(
      (dependency) => dependency instanceof Property,
    );

    if (!isConnected) this.connectDependencies();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const context: Record<string, any> = {};

    for (const dependency of this.dependecies) {
      if (dependency instanceof Property) {
        if (!context[dependency.block.id]) context[dependency.block.id] = {};

        context[dependency.block.id][dependency.key] = dependency.value;
      }
    }

    return context;
  }

  connectDependencies() {
    if (!this.dependecies) return;

    for (let index = 0; index < this.dependecies.length; index++) {
      const dependency = this.dependecies[index];

      if (typeof dependency === "string") {
        const [, componentId, property] = dependency.split(".");

        if (!componentId || !property) continue;

        const block = this.block.context.registry[componentId];

        if (!block) continue;

        if (!block.properties[property]) block.addProperty(property, "");

        if (!block.properties[property]) {
          throw new Error(
            `Unable to create property ${property} in block ${componentId}`,
          );
        }

        block.properties[property].dependent.push(this);
        this.dependecies[index] = block.properties[property];
      }
    }
  }
}

function findVariable(expression: string) {
  const result = expression.match(/\{\{(.*?)\}\}/g);

  if (result) return result.map(cleanupExpression);

  return undefined;
}

function cleanupExpression(expression: string) {
  return expression.replace(/\{\{|\}\}/g, "").trim();
}
