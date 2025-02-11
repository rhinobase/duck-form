import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { evalProp, type stringSchema } from "@rhinobase/shared";
import React from "react";

export type StringProps = typeof stringSchema.infer;

export function StringField({
  onChange,
  inputType,
  defaultValue,
  inputMode,
  maxLength,
  minLength,
  name,
  placeholder,
  value,
}: StringProps) {
  const props = {
    onChange,
    inputType,
    defaultValue,
    inputMode,
    maxLength,
    minLength,
    name,
    placeholder,
    value,
  };

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

  return (
    <RaftyInputField
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      inputMode={fieldProps.inputMode}
      maxLength={fieldProps.maxLength}
      minLength={fieldProps.minLength}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      type={fieldProps.inputType}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
