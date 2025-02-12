import { Calendar as RaftyCalendar } from "@rafty/ui/calendar";
import { type calendarSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type CalendarProps = z.infer<typeof calendarSchema>;

export function CalendarField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, defaultValue, placeholder, value, onChange } =
    useField<CalendarProps>();

  const props = {
    defaultValue,
    name,
    placeholder,
    value,
    onChange,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyCalendar
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
      className="w-max"
    />
  );
}
