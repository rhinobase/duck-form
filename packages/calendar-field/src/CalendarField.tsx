import { Calendar as RaftyCalendar } from "@rafty/ui/calendar";
import { type calendarSchema, useEvaluate } from "@rhinobase/shared";
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
  const props = {
    defaultValue,
    name,
    placeholder,
    value,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyCalendar
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
      className="w-max"
    />
  );
}
