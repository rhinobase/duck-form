"use client";
import { Calendar as RaftyCalendar } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type CalendarProps = {
  type: "calendar";
  placeholder?: string;
  defaultValue?: string;
};

export function CalendarField() {
  const props = useField<CalendarProps>();
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { onChange, ...field } }) => (
        <RaftyCalendar
          {...field}
          placeholder={props.placeholder}
          onValueChange={onChange}
          className="w-max"
        />
      )}
    />
  );
}
