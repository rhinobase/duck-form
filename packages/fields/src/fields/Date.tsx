"use client";
import { InputField } from "@rafty/ui";
import dayjs from "dayjs";
import type z from "zod";
import type { dateSchema } from "../validations";

export type DateFieldProps = z.infer<typeof dateSchema>;

export function DateField({
  value,
  onChange,
  defaultValue,
  name,
  placeholder,
}: DateFieldProps) {
  const formattedValue = value ? dayjs(value).format("YYYY-MM-DD") : undefined;

  return (
    <InputField
      id={name}
      type="date"
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={formattedValue}
      onChange={(e) => onChange?.(dayjs(e.target.value).toISOString())}
    />
  );
}
