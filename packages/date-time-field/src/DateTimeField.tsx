import { InputField } from "@rafty/ui";
import { type datetimeSchema, useEvaluate } from "@rhinobase/shared";
import dayjs from "dayjs";
import React from "react";
import type z from "zod";

export type DatetimeFieldProps = z.infer<typeof datetimeSchema>;

export function DatetimeField({
  value,
  onChange,
  defaultValue,
  name,
  placeholder,
}: DatetimeFieldProps) {
  const props = {
    value,
    name,
    placeholder,
    defaultValue,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  const formattedValue = fieldProps.value
    ? dayjs(fieldProps.value).format("YYYY-MM-DDThh:mm")
    : undefined;

  return (
    <InputField
      {...fieldProps}
      type="datetime-local"
      id={fieldProps.name}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
