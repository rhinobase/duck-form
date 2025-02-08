import { PinInput as RaftyPinInput } from "@rafty/ui";
import { evalProp, type pinSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type PinInputProps = z.infer<typeof pinSchema>;

export function PinField(props: PinInputProps) {
  const componentProps = {
    // @ts-expect-error
    defaultValue: evalProp(props.defaultValue),
    // @ts-expect-error
    value: evalProp(props.value),
    // @ts-expect-error
    onChange: evalProp(props.onChange),
    // @ts-expect-error
    length: evalProp(props.length),
    // @ts-expect-error
    name: evalProp(props.name),
    // @ts-expect-error
    placeholder: evalProp(props.placeholder),
  };

  const { defaultValue, value, onChange, length, name, placeholder } =
    componentProps;

  const formattedValue = value ? Array.from<string>(value) : undefined;
  const formattedDefaultValue = defaultValue
    ? Array.from<string>(defaultValue)
    : undefined;

  return (
    <RaftyPinInput
      id={name}
      length={length}
      placeholder={placeholder}
      defaultValue={formattedDefaultValue}
      value={formattedValue}
      onValueChange={({ value }) => onChange?.(value)}
    />
  );
}
