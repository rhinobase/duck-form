import { RangePicker as RaftyRangePicker } from "@rafty/ui";
import { evalProp, type dateRangeSchema } from "@rhinobase/shared";
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
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        // @ts-expect-error
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyRangePicker
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
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
