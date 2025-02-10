import { InputField as RaftyInputField } from "@rafty/ui";
import { evalProp, type numberSchema } from "@rhinobase/shared";
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
      type="number"
      step={fieldProps.step}
      defaultValue={fieldProps.defaultValue}
      max={fieldProps.max}
      min={fieldProps.min}
      inputMode={fieldProps.inputMode}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      onChange={(event) => {
        const value = event.target.value;

        fieldProps.onChange?.(value !== "" ? Number(value) : undefined);
      }}
    />
  );
}
