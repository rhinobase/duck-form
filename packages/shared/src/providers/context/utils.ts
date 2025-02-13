import { figureOutVariables } from "../../hooks/useEvaluate.js";

type SchemaType = {
  id: string;
  type: string;
  blocks?: Record<string, SchemaType>;
} & Record<string, unknown>;

type PageContextOptions = {
  queries: Record<string, Record<string, unknown>>;
  schema: SchemaType;
};

export class PageContext {
  queries: Record<string, Record<string, unknown>>;
  components: Record<string, Record<string, unknown>>;
  private dependencyGraph: Record<string, string[]>;
  private proxyHandler: ProxyHandler<Record<string, unknown>>;

  constructor(options: PageContextOptions) {
    this.proxyHandler = {
      get: (target, prop) => {
        console.log(target, prop);

        if (prop in target) return target[prop];
      },
      set: (target, prop, value) => {
        console.log(target, prop, value);

        target[prop] = value;
        return true;
      },
    };

    this.queries = new Proxy(options.queries, this.proxyHandler);
    this.components = getComponents(options.schema, this.proxyHandler);
    this.dependencyGraph = generateDependencyGraph({
      queries: this.queries,
      components: this.components,
    });

    console.log(this.dependencyGraph);
  }
}

function getComponents(
  schema: SchemaType,
  handler: ProxyHandler<Record<string, unknown>>,
  components = {},
) {
  const { blocks, id, ...props } = schema;

  components[id] = new Proxy(props, handler);

  if (blocks) {
    for (const block of Object.values(blocks)) {
      getComponents(block, handler, components);
    }
  }

  return components;
}

function generateDependencyGraph(
  components: Record<string, Record<string, unknown>>,
) {
  const ids = Object.keys(components);
  const graph: Record<string, string[]> = Object.fromEntries(
    ids.map((id) => [id, []]),
  );

  for (const id of ids) {
    const variables = figureOutVariables(components[id]);

    if (variables?.length) {
      for (const variable of variables) {
        // TODO: find the variable in the string, Eg. '_.sum(components.tags)' => 'components.tags'
        const componentId = variable;

        if (componentId) graph[componentId].push(id);
      }
    }
  }

  return graph;
}
