import { InputField } from "@rafty/ui";
import type { datetimeSchema } from "@rhinobase/shared";
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
  const formattedValue = value
    ? dayjs(value).format("YYYY-MM-DDThh:mm")
    : undefined;

  return (
    <InputField
      id={name}
      defaultValue={defaultValue}
      type="datetime-local"
      placeholder={placeholder}
      value={formattedValue}
      onChange={(e) => onChange?.(dayjs(e.target.value).toISOString())}
    />
  );
}
