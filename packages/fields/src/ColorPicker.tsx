"use client";
import { ColorPicker as RaftyColorPicker } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type ColorPickerProps = {
  type: "colorPicker";
  defaultValue?: string;
};

export function ColorPickerField() {
  const props = useField<ColorPickerProps>();
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
      render={({ field: { name, onChange, ref, value, disabled } }) => (
        <RaftyColorPicker
          id={name}
          name={name}
          value={value}
          onValueChange={({ valueAsString }: { valueAsString: string }) =>
            onChange(valueAsString)
          }
          disabled={disabled}
          ref={ref}
        />
      )}
    />
  );
}
