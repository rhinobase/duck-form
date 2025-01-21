"use client";
import { useField } from "duck-form";
import {
  type JSXElementConstructor,
  type ReactElement,
  cloneElement,
} from "react";
import { Controller, useFormContext } from "react-hook-form";
import type { DuckFieldProps } from "./Duck";

export type ReactHookFormWrapper = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  children: ReactElement<any, string | JSXElementConstructor<any>>;
} & Omit<DuckFieldProps, "type">;

export function ReactHookFormWrapper({
  children,
  ...props
}: ReactHookFormWrapper) {
  const { control } = useFormContext();
  const { id } = useField<{ id: string; type: string }>();

  const name = id.replace(/\.of/g, "").replace(/\.fields/g, "");
  console.log(id);

  return (
    <Controller
      name={name}
      control={control}
      disabled={props.disabled ? Boolean(props.disabled) : undefined}
      render={({ field }) => cloneElement(children, { ...props, ...field })}
    />
  );
}
