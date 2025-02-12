import { Select as RaftySelect, SelectItem } from "@rafty/ui/select";
import { useEvaluate, type selectSchema } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type SelectProps = z.infer<typeof selectSchema>;

export function SelectField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { onChange, options, defaultValue, name, placeholder, value } =
    useField<SelectProps>();

  const props = {
    name,
    placeholder,
    defaultValue,
    options,
    value,
    onChange,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;
  const { options: fieldOptions, ...fieldProps } = useEvaluate(props);

  return (
    <RaftySelect
      {...fieldProps}
      name={componentId}
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
