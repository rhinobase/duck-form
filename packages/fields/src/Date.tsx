"use client";
import { DatePicker as RaftyDatePicker } from "@rafty/ui";
import dayjs from "dayjs";

export type DateFieldProps = {
  name?: string;
  type: "date";
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function DateField({ type, value, onChange, ...props }: DateFieldProps) {
  const newValue = value && dayjs(value).format("YYYY-MM-DD");

  return (
    <RaftyDatePicker
      {...props}
      id={props.name}
      placeholder={props.placeholder}
      value={newValue}
      onValueChange={onChange}
    />
  );
}
