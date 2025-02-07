"use client";
import type { FieldWrapperProps, TooltipWrapperProps } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
  useId,
  useMemo,
} from "react";

export type DuckWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type DuckFieldProps = {
  name?: string;
  id: string;
  fieldset?: string;
} & FieldWrapperProps &
  TooltipWrapperProps;

export function DuckWrapper({ children }: DuckWrapper) {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const props = useField<DuckFieldProps>();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  return cloneElement(children, { ...props, name: componentId });
}
