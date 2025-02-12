import { ColorPicker as RaftyColorPicker } from "@rafty/ui/color-picker";
import { type colorPickerSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type ColorPickerProps = z.infer<typeof colorPickerSchema>;

export function ColorPickerField({
  defaultValue,
  value,
  onChange,
  name,
}: ColorPickerProps) {
  const props = { name, value, defaultValue, onChange };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyColorPicker
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={({ valueAsString }: { valueAsString: string }) =>
        fieldProps.onChange?.(valueAsString)
      }
    />
  );
}
