import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { evalProp, type stringSchema } from "@rhinobase/shared";
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
  const updatedName = name ? evalProp(name) : undefined;
  const updatedInputType = inputType ? evalProp(inputType) : undefined;
  const updatedDefaultValue = defaultValue ? evalProp(defaultValue) : undefined;
  const updatedValue = value ? evalProp(value) : undefined;
  // @ts-expect-error
  const updatedMaxLength = maxLength ? evalProp(maxLength) : undefined;
  const updatedMinLength = minLength ? evalProp(minLength) : undefined;
  const updatedInputMode = inputMode ? evalProp(inputMode) : undefined;
  const updatedPlaceholder = placeholder ? evalProp(placeholder) : undefined;

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
