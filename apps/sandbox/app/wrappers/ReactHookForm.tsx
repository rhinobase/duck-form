import { useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
} from "react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { DuckFieldProps } from "./Duck";

export type ReactHookFormWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
};

export function ReactHookFormWrapper({ children }: ReactHookFormWrapper) {
  const props = useField<DuckFieldProps>();
  const { control } = useFormContext();

  // if (!props.name) throw new Error("Field name property is not defined!");

  return (
    <Controller
      name={props.name ?? props.id}
      control={control}
      disabled={props.disabled ? Boolean(props.disabled) : undefined}
      render={({ field }) => cloneElement(children, { ...props, ...field })}
    />
  );
}
