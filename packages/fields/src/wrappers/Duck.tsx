"use client";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
  useId,
  useMemo,
} from "react";
import type { FieldWrapperProps } from "../FieldWrapper";
import type { InputWrapperProps } from "../InputWrapper";
import type { TooltipWrapperProps } from "../TooltipWrapper";

export type DuckWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type DuckFieldProps = {
  name?: string;
  fieldset?: string;
} & FieldWrapperProps &
  TooltipWrapperProps &
  InputWrapperProps;

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
