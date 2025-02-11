import { Calendar as RaftyCalendar } from "@rafty/ui";
import { evalProp, type calendarSchema } from "@rhinobase/shared";
import React from "react";

export type CalendarProps = typeof calendarSchema.infer;

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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyCalendar
      id={fieldProps.name}
      value={fieldProps.value}
      placeholder={fieldProps.placeholder}
      defaultValue={fieldProps.defaultValue}
      onValueChange={fieldProps.onChange}
      className="w-max"
    />
  );
}
