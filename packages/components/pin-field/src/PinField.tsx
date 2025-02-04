import { PinInput as RaftyPinInput } from "@rafty/ui";
import type { pinSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type PinInputProps = z.infer<typeof pinSchema>;

export function PinField({
  defaultValue,
  value,
  onChange,
  length,
  name,
  placeholder,
}: PinInputProps) {
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
