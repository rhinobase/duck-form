"use client";
import { TagField as RaftyTagField } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type TagFieldProps = {
  type: "tag";
  defaultValue?: string[];
};

export function TagField() {
  const props = useField<TagFieldProps>();

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
      render={({ field: { name, onChange, value, ref, disabled } }) => (
        <RaftyTagField
          id={name}
          name={name}
          value={value}
          onValueChange={onChange}
          disabled={disabled}
          ref={ref}
        />
      )}
    />
  );
}
