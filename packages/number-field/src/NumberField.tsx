import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { type numberSchema, useEvaluate } from "@rhinobase/shared";
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
  const props = {
    onChange,
    step,
    defaultValue,
    inputMode,
    max,
    min,
    name,
    placeholder,
    value,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyInputField
      {...fieldProps}
      type="number"
      id={fieldProps.name}
      onChange={(event) => {
        const value = event.target.value;

        fieldProps.onChange?.(value !== "" ? Number(value) : undefined);
      }}
    />
  );
}
