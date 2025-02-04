import { Calendar as RaftyCalendar } from "@rafty/ui";
import type { calendarSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type CalendarProps = z.infer<typeof calendarSchema>;

export function CalendarField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: CalendarProps) {
  return (
    <RaftyCalendar
      id={name}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="w-max"
    />
  );
}
