"use client";
import { InputField } from "@rafty/ui";
import dayjs from "dayjs";
import type { FieldType } from "./constants";

export type DateFieldProps = {
  name?: string;
  type: FieldType.DATE;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function DateField({ type, value, onChange, ...props }: DateFieldProps) {
  const formattedValue = value ? dayjs(value).format("YYYY-MM-DD") : undefined;

  return (
    <InputField
      {...props}
      id={props.name}
      type="date"
      placeholder={props.placeholder}
      value={formattedValue}
      onChange={(e) => {
        const value = dayjs(e.target.value);
        if (value.isValid()) onChange?.(value.toISOString());
      }}
    />
  );
}
