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
      this.properties[key] = new Property(this, key, properties[key]);
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

  addProperty(
    key: string,
    value: string | (string | NestedProperties)[] | NestedProperties,
  ) {
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

// @ts-expect-error
type NestedProperties = Record<string, string | NestedProperties>;

// TODO: find the variable in the string, Eg. '_.sum(components.tag1)' => 'components.tag1'
class Property {
  isDynamic = false;

  /**
   * The list of properties that this property depends on
   */
  dependecies?: (string | Property)[];

  /**
   * The list of properties that depend on this property
   */
  dependent: Property[] = [];
  private _value: string | Property[] | Record<string, Property>;

  constructor(
    public parent: Block | Property,
    public key: string,
    value: string | (string | NestedProperties)[] | NestedProperties,
  ) {
    this._value = this.extractValue(value);

    this.analyze();
  }

  get id(): string {
    return `${this.parent.id}.${this.key}`;
  }

  get context(): PageContext {
    return this.parent.context;
  }

  toJSON({ force }: { force?: boolean } = {}): Record<string, unknown> {
    return this.parent.toJSON({ force });
  }

  extractValue(
    value: string | (string | NestedProperties)[] | NestedProperties,
  ) {
    if (typeof value === "string") return value;

    if (Array.isArray(value))
      return value.map(
        (item, index) => new Property(this, String(index), item),
      );

    return Object.entries(value).reduce<Record<string, Property>>(
      (acc, [subKey, subValue]) => {
        if (subValue) acc[subKey] = new Property(this, subKey, subValue);
        return acc;
      },
      {},
    );
  }

  analyze() {
    let variables: string[] | undefined;

    if (typeof this._value === "string") {
      variables = findVariable(this._value);
    }

    if (variables?.length) {
      this.isDynamic = true;
      this.dependecies = variables;
    } else {
      this.isDynamic = false;
      this.dependecies = undefined;
    }
  }

  execute(expression: string) {
    return Function(
      `const components = arguments[0]; return ${cleanupExpression(expression)}`,
    )(this.generateContextForValue());
  }

  get value() {
    if (typeof this._value === "string") {
      if (this.isDynamic) return this.execute(this._value);

      return this._value;
    }

    if (Array.isArray(this._value)) {
      return this._value.map((item) => item.value);
    }

    return Object.entries(this._value).reduce<Record<string, unknown>>(
      (acc, [key, property]) => {
        acc[key] = property.value;
        return acc;
      },
      {},
    );
  }

  set value(val: string | (string | NestedProperties)[] | NestedProperties) {
    this._value = this.extractValue(val);

    this.analyze();

    if (this.isDynamic) this.connectDependencies();

    // Notify all dependent properties
    for (const dependent of this.dependent) {
      dependent.parent.toJSON({ force: true });
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
        if (!context[dependency.parent.id]) context[dependency.parent.id] = {};

        context[dependency.parent.id][dependency.key] = dependency.value;
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

        const block = this.parent.context.registry[componentId];

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

function findVariable(...expression: string[]) {
  const result = expression.flatMap((val) => val.match(/\{\{(.*?)\}\}/g));

  if (result) {
    const set = new Set<string>();

    for (const item of result) {
      if (item) set.add(item);
    }

    return Array.from(set).map(cleanupExpression);
  }

  return undefined;
}

function cleanupExpression(expression: string) {
  return expression.replace(/\{\{|\}\}/g, "").trim();
}
