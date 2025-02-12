import { ColorPicker as RaftyColorPicker } from "@rafty/ui/color-picker";
import { type colorPickerSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type ColorPickerProps = z.infer<typeof colorPickerSchema>;

export function ColorPickerField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, value, defaultValue, onChange } = useField<ColorPickerProps>();

  const props = { name, value, defaultValue, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyColorPicker
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={({ valueAsString }: { valueAsString: string }) =>
        fieldProps.onChange?.(valueAsString)
      }
    />
  );
}
