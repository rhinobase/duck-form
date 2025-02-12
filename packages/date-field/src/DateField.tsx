import { InputField } from "@rafty/ui";
import { type dateSchema, useEvaluate } from "@rhinobase/shared";
import dayjs from "dayjs";
import React from "react";
import type z from "zod";

export type DateFieldProps = z.infer<typeof dateSchema>;

export function DateField({
  value,
  onChange,
  defaultValue,
  name,
  placeholder,
}: DateFieldProps) {
  const props = { name, value, defaultValue, placeholder, onChange };

  const fieldProps = useEvaluate(props);

  const formattedValue = fieldProps.value
    ? dayjs(fieldProps.value).format("YYYY-MM-DD")
    : undefined;

  return (
    <InputField
      {...fieldProps}
      type="date"
      id={fieldProps.name}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
