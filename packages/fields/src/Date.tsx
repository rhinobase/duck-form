"use client";
import { DatePicker as RaftyDatePicker } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type DateFieldProps = {
  type: "date";
  placeholder?: string;
  defaultValue?: string;
};

export function DateField() {
  const props = useField<DateFieldProps>();

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
      render={({ field: { onChange, value, ...renderProps } }) => {
        const newValue = value ? value.substr(0, 10) : "";

        return (
          <RaftyDatePicker
            {...renderProps}
            placeholder={props.placeholder}
            value={newValue}
            onValueChange={onChange}
          />
        );
      }}
    />
  );
}
