import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { type stringSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type StringProps = z.infer<typeof stringSchema>;

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

  const fieldProps = useEvaluate(props);

  return (
    <RaftyInputField
      {...fieldProps}
      id={fieldProps.name}
      type={fieldProps.inputType}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
