import { RangePicker as RaftyRangePicker } from "@rafty/ui/range-picker";
import { type dateRangeSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type DateRangeFieldProps = z.infer<typeof dateRangeSchema>;

export function DateRangeField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, value, placeholder, defaultValue, onChange } =
    useField<DateRangeFieldProps>();

  const props = {
    name,
    value,
    placeholder,
    defaultValue,
    onChange,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyRangePicker
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={(value) => {
        const val: string[] = [];

        if (value) {
          value.map((item) => {
            if (item) val.push(item);
          });
        }
        fieldProps.onChange?.(val.length > 0 ? val : undefined);
      }}
    />
  );
}
