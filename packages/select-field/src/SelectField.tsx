import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import { useEvaluate, type selectSchema } from "@rhinobase/shared";
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
  const { options: fieldOptions, ...fieldProps } = useEvaluate(props);

  return (
    <RaftySelect
      {...fieldProps}
      id={fieldProps.name}
      onChange={(e) => {
        const value = e.currentTarget.value;
        let valueAsNumber: number | undefined = Number(value);

        if (Number.isNaN(valueAsNumber)) valueAsNumber = undefined;

        for (const option of fieldOptions) {
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
        fieldOptions as {
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
