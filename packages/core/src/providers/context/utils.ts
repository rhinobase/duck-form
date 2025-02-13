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
  // private dependencyGraph: Record<string, string[]> = {};

  constructor(options: PageContextOptions) {
    this.queries = options.queries ?? {};

    for (const [id, payload] of Object.entries(options.schema)) {
      new Block(this, { id, ...payload });
    }
  }

  register(block: Block) {
    this.registry[block.id] = block;
  }

  update(key: string, value: string) {
    const [blockId, property] = key.split(".");

    if (!blockId || !property) return;

    const block = this.registry[blockId];

    if (!block || !block.properties[property]) return;

    block.properties[property].value = value;
  }

  get context() {
    const context: Record<string, unknown> = {};

    for (const block of Object.values(this.registry)) {
      context[block.id] = block.toJSON();
    }

    return context;
  }
}

// function generateDependencyGraph(
//   components: Record<string, Record<string, unknown>>,
// ) {
//   const ids = Object.keys(components);
//   const graph: Record<string, string[]> = {};

//   for (const id of ids) {
//     const variables = findVariables(components[id]);

//     if (variables?.length) {
//       for (const variable of variables) {
//         // TODO: find the variable in the string, Eg. '_.sum(components.tag1)' => 'components.tag1'
//         const componentId = variable.split(".")[1];

//         if (componentId) {
//           if (!graph[componentId]) graph[componentId] = [];
//           graph[componentId].push(id);
//         }
//       }
//     }
//   }

//   return graph;
// }

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

  toJSON(): Record<string, unknown> {
    const payload: Record<string, unknown> = {
      id: this.id,
      type: this.type,
    };

    for (const [key, property] of Object.entries(this.properties)) {
      payload[key] = property.value;
    }

    return payload;
  }
}

class Property {
  block: Block;
  isDynamic = false;
  dependecies?: (string | Property)[];
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
  }

  private generateContextForValue() {
    if (!this.dependecies) return {};

    const isConnected = this.dependecies.every(
      (dependency) => dependency instanceof Property,
    );

    if (!isConnected) this.connectDependencies();

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
    if (this.dependecies) {
      for (let index = 0; index < this.dependecies.length; index++) {
        const dependency = this.dependecies[index];

        if (typeof dependency === "string") {
          const [, componentId, property] = dependency.split(".");

          if (!componentId || !property) continue;

          const block = this.block.context.registry[componentId];

          if (!block || !block.properties[property]) continue;

          block.properties[property].dependent.push(this);
          this.dependecies[index] = block.properties[property];
        }
      }
    }
  }
}

function findVariables(
  struct: Record<string, unknown>,
  payload: { key: string; value: string; variables: string[] }[] = [],
) {
  for (const [key, value] of Object.entries(struct)) {
    const variables = findVariable(String(value));
    if (variables) payload.push({ key, value: String(value), variables });
  }

  return payload;
}

function findVariable(expression: string) {
  const result = expression.match(/\{\{(.*?)\}\}/g);

  if (result) return result.map(cleanupExpression);

  return undefined;
}

function cleanupExpression(expression: string) {
  return expression.replace(/\{\{|\}\}/g, "").trim();
}
