// biome-ignore lint/complexity/noBannedTypes: We are using Function constructor to evaluate the expression
type VaribalesPayloadType = { variables?: string[]; func: Function };

export function useEvaluate(
  props: Record<string, unknown>,
): Record<string, unknown> {
  const { type, blocks, ...properties } = props;

  const variables: VaribalesPayloadType[] = [];
  const evaluatedProps = evalProp(properties, variables);

  const uniqueVariables = Array.from(
    new Set(variables.flatMap((v) => v.variables || [])),
  );

  // TODO: Get the context from the variables
  // TODO: Execute the functions in variables

  return {
    type,
    blocks,
    // @ts-expect-error
    ...evaluatedProps,
  };
}

export function evalProp(
  struct: NonNullable<unknown>,
  variables: VaribalesPayloadType[],
): Record<string, unknown> | unknown {
  if (typeof struct === "object" && "type" in struct && "value" in struct) {
    if (struct.type === "literal") return struct.value;

    const variable = findVariable(struct.value as string);
    const func = Function(`return ${struct.value}`);

    let value: unknown = undefined;

    variables.push({
      variables: variable,
      func: () => {
        value = func();
      },
    });

    return value;
  }
  if (Array.isArray(struct)) {
    return struct.map((val) => evalProp(val, variables));
  }
  if (typeof struct === "object") {
    return Object.entries(struct).reduce<Record<string, unknown>>(
      (prev, [key, val]) => {
        if (val) prev[key] = evalProp(val, variables);
        return prev;
      },
      {},
    );
  }

  throw new Error("Invalid struct");
}

function findVariable(expression: string) {
  const result = expression.match(/\{\{(.*?)\}\}/g);

  if (result) return result.map(cleanupExpression);

  return undefined;
}

function cleanupExpression(expression: string) {
  return expression.replace(/\{\{|\}\}/g, "").trim();
}
