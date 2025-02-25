export type Promisify<T> = T | Promise<T>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type DefaultValue<T extends Record<string, any>> = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  [K in keyof T]?: T[K] extends { blocks: Record<string, any> }
    ? DefaultValue<T[K]["blocks"]>
    : // @ts-expect-error
      FieldPropsMap[T[K]["type"]]["defaultValue"];
};
