"use client";
import { useDuckForm, useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
  useId,
} from "react";
import type { FieldWrapperProps } from "../FieldWrapper";
import type { TooltipWrapperProps } from "../TooltipWrapper";

export type DuckWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type DuckFieldProps = {
  name?: string;
  fieldset?: string;
} & FieldWrapperProps &
  TooltipWrapperProps;

export function DuckWrapper({ children }: DuckWrapper) {
  const props = useField<DuckFieldProps>();
  const { resolverKey } = useDuckForm();

  const autoId = useId();

  const componentId =
    String(props[resolverKey as keyof DuckFieldProps]) ?? autoId;

  const fieldProps = { ...props, [resolverKey]: componentId };

  return cloneElement(children, fieldProps);
}
