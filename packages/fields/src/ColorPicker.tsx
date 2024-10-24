"use client";
import { ColorPicker as RaftyColorPicker, useBoolean } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type ColorPickerProps = {
  type: "colorPicker";
  defaultValue?: string;
};

export function ColorPickerField() {
  const props = useField<ColorPickerProps>();
  const [isOpen, setOpen] = useBoolean();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const { isDebug } = useDebug() ?? {
    isDebug: false,
  };

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
      render={({ field: { name, onChange, ...field } }) => (
        <RaftyColorPicker
          {...field}
          id={name}
          name={name}
          open={isOpen}
          onOpenChange={({ open }) => setOpen(open)}
          onValueChange={({ valueAsString }: { valueAsString: string }) =>
            onChange(valueAsString)
          }
          onPointerDownCapture={(event) =>
            isDebug && !isOpen && stopEventPropagation(event)
          }
          onKeyDownCapture={(event) => isDebug && stopEventPropagation(event)}
        />
      )}
    />
  );
}
