import { InputField as RaftyInputField } from "@rafty/ui";
import type { numberSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type NumberProps = z.infer<typeof numberSchema>;

export function NumberField({
  onChange,
  step,
  defaultValue,
  inputMode,
  max,
  min,
  name,
  placeholder,
  value,
}: NumberProps) {
  return (
    <RaftyInputField
      id={name}
      type="number"
      step={step}
      defaultValue={defaultValue}
      max={max}
      min={min}
      inputMode={inputMode}
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        const value = event.target.value;

        onChange?.(value !== "" ? Number(value) : undefined);
      }}
    />
  );
}
