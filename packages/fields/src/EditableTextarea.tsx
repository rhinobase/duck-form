"use client";
import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type EditableTextareaProps = {
  type: "editableTextarea";
  defaultValue?: string;
  placeholder?: string;
};

export function EditableTextareaField() {
  const props = useField<EditableTextareaProps>();

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
        <RaftyEditableTextarea
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
