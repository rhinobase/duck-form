import { usePageContext } from "../providers/index.js";

export function useEvaluate(
  props: Record<string, unknown>,
  // biome-ignore lint/suspicious/noExplicitAny: We need this to resolve errors for components
): Record<string, any> {
  const { blocks, ...properties } = props;

  const variables = figureOutVariables(properties);
  const uniqueVariables = Array.from(new Set(variables));

  // TODO: Get the context from the variables for the uniqueVariables
  const c = usePageContext((state) => state.context);

  // Evaluate the properties
  let evaluatedProps = evalProp(properties, c);

  if (typeof evaluatedProps === "string") {
    evaluatedProps = { value: evaluatedProps };
  }

  return {
    blocks,
    // @ts-expect-error
    ...evaluatedProps,
  };
}

function evalProp(
  struct: NonNullable<unknown>,
  context: unknown,
): Record<string, unknown> | unknown {
  if (typeof struct === "object" && "type" in struct && "value" in struct) {
    if (struct.type === "literal") return struct.value;

    if (struct.type === "script") {
      return Function(
        `const c = arguments[0]; return ${cleanupExpression(String(struct.value))}`,
      )(context);
    }
  }
  if (Array.isArray(struct)) {
    return struct.map((val) => evalProp(val, context));
  }
  if (typeof struct === "object") {
    return Object.entries(struct).reduce<Record<string, unknown>>(
      (prev, [key, val]) => {
        if (val) prev[key] = evalProp(val, context);
        return prev;
      },
      {},
    );
  }

  return struct;
}

function figureOutVariables(
  struct: Record<string, unknown> | unknown[] | unknown,
  variables: string[] = [],
) {
  if (typeof struct === "string") {
    const variable = findVariable(struct);
    if (variable) variables.push(...variable);
  }

  if (typeof struct === "object") {
    const values = Array.isArray(struct)
      ? struct
      : Object.values(struct as Record<string, unknown>);

    for (const val of values) {
      figureOutVariables(val, variables);
    }
  } else return variables;
}

function findVariable(expression: string) {
  const result = expression.match(/\{\{(.*?)\}\}/g);

  if (result) return result.map(cleanupExpression);

  return undefined;
}

function cleanupExpression(expression: string) {
  return expression.replace(/\{\{|\}\}/g, "").trim();
}
