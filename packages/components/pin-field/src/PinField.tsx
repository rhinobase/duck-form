import { PinInput as RaftyPinInput } from "@rafty/ui";
import { type pinSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type PinInputProps = z.infer<typeof pinSchema>;

export function PinField({
  defaultValue,
  length,
  onChange,
  placeholder,
  value,
  name,
}: PinInputProps) {
  const props = { name, placeholder, defaultValue, value, onChange, length };

  const fieldProps = useEvaluate(props);

  const formattedValue = fieldProps.value
    ? Array.from<string>(fieldProps.value)
    : undefined;
  const formattedDefaultValue = defaultValue
    ? Array.from<string>(fieldProps.defaultValue)
    : undefined;

  return (
    <RaftyPinInput
      {...fieldProps}
      id={fieldProps.name}
      defaultValue={formattedDefaultValue}
      value={formattedValue}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
