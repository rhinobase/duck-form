import { PinInput as RaftyPinInput } from "@rafty/ui";
import { evalProp, type pinSchema } from "@rhinobase/shared";
import React from "react";

export type PinInputProps = typeof pinSchema.infer;

export function PinField({
  defaultValue,
  length,
  onChange,
  placeholder,
  value,
  name,
}: PinInputProps) {
  const props = { name, placeholder, defaultValue, value, onChange, length };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  const formattedValue = fieldProps.value
    ? Array.from<string>(fieldProps.value)
    : undefined;
  const formattedDefaultValue = defaultValue
    ? Array.from<string>(fieldProps.defaultValue)
    : undefined;

  return (
    <RaftyPinInput
      id={fieldProps.name}
      length={fieldProps.length}
      placeholder={fieldProps.placeholder}
      defaultValue={formattedDefaultValue}
      value={formattedValue}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
