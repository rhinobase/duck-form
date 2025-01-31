"use client";
import { useDuckForm, useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
  useId,
} from "react";

export type DuckWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export type DuckFieldProps = {
  type: string;
  name?: string;
  fieldset?: string;
};

export function DuckWrapper({ children }: DuckWrapper) {
  const props = useField<DuckFieldProps>();
  const { resolverKey } = useDuckForm();

  const autoId = useId();

  const componentId =
    String(props[resolverKey as keyof DuckFieldProps]) ?? autoId;

  const fieldProps = { ...props, [resolverKey]: componentId };

  return cloneElement(children, fieldProps);
}
