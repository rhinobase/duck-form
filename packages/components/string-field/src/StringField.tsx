import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { from, type stringSchema } from "@rhinobase/shared";
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
  const updatedName = name ? from(name) : undefined;
  const updatedInputType = inputType ? from(inputType) : undefined;
  const updatedDefaultValue = defaultValue ? from(defaultValue) : undefined;
  const updatedValue = value ? from(value) : undefined;
  // @ts-expect-error
  const updatedMaxLength = maxLength ? from(maxLength) : undefined;
  const updatedMinLength = minLength ? from(minLength) : undefined;
  const updatedInputMode = inputMode ? from(inputMode) : undefined;
  const updatedPlaceholder = placeholder ? from(placeholder) : undefined;

  return (
    <RaftyInputField
      id={updatedName}
      defaultValue={updatedDefaultValue}
      inputMode={updatedInputMode}
      maxLength={updatedMaxLength}
      minLength={updatedMinLength}
      placeholder={updatedPlaceholder}
      value={updatedValue}
      type={updatedInputType}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
