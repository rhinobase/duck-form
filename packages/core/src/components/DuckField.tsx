import { Fragment } from "react";
import { FieldProvider, useBlueprint, useDuckForm } from "../providers";

export type DuckField<
  T extends Record<string, unknown> = Record<string, unknown>,
> = {
  type: string;
} & T;

export function DuckField<T extends Record<string, unknown>>(props: T) {
  const { wrapper: Wrapper = Fragment, schema } = useBlueprint() ?? {};
  const { components, resolver } = useDuckForm();

  const options = resolver(schema, props);
  let Component = options?.type ? components[options.type] : undefined;
  Component ??= components.default;

  return (
    <FieldProvider type={options?.type ?? "default"} {...options}>
      <Wrapper>
        <Component />
      </Wrapper>
    </FieldProvider>
  );
}
