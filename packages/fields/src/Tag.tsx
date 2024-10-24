"use client";
import { TagField as RaftyTagField } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type TagFieldProps = {
  type: "tag";
  defaultValue?: string[];
};

export function TagField() {
  const props = useField<TagFieldProps>();

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
      render={({ field: { onChange, ...field } }) => (
        <RaftyTagField
          {...field}
          onValueChange={({ value }) => onChange(value)}
          onPointerDownCapture={(event) =>
            isDebug && stopEventPropagation(event)
          }
        />
      )}
    />
  );
}
