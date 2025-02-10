import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import { evalProp, type selectSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SelectProps = z.infer<typeof selectSchema>;

export function SelectField({
  onChange,
  options,
  defaultValue,
  name,
  placeholder,
  value,
}: SelectProps) {
  const props = {
    name,
    placeholder,
    defaultValue,
    options,
    value,
    onChange,
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
    <RaftySelect
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      onChange={(e) => {
        const value = e.currentTarget.value;
        let valueAsNumber: number | undefined = Number(value);

        if (Number.isNaN(valueAsNumber)) valueAsNumber = undefined;

        for (const option of fieldProps.options) {
          if (
            value === option.value ||
            (valueAsNumber && valueAsNumber === option.value)
          )
            return fieldProps.onChange?.(option.value);
        }
      }}
      className="w-full"
    >
      {(
        fieldProps.options as {
          value: string | number;
          label?: string | undefined;
        }[]
      ).map(({ value, label }, index) => (
        <SelectItem key={`${index}-${name}`} value={value}>
          {label ?? value}
        </SelectItem>
      ))}
    </RaftySelect>
  );
}
