import { Fragment } from "react";
import { FieldProvider, useBlueprint, useDuckForm } from "../providers";
import _ from "lodash";

export type DuckField<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  type: string;
} & T;

export function DuckField<T extends Record<string, unknown>>(props: T) {
  const { wrapper: Wrapper = Fragment, schema } = useBlueprint() ?? {};
  const { components, resolverKey } = useDuckForm();

  const options = _.get(schema, String(props[resolverKey])) as DuckField;

  let Component = options?.type ? components[options.type] : undefined;
  Component ??= components.default;

  return (
    <FieldProvider {...options} {...props} type={options?.type ?? "default"}>
      <Wrapper>
        <Component />
      </Wrapper>
    </FieldProvider>
  );
}
