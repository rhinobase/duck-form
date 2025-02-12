import { RangePicker as RaftyRangePicker } from "@rafty/ui/range-picker";
import { type dateRangeSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type DateRangeFieldProps = z.infer<typeof dateRangeSchema>;

export function DateRangeField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: DateRangeFieldProps) {
  const props = {
    name,
    value,
    placeholder,
    defaultValue,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyRangePicker
      {...fieldProps}
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
