"use client";
import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type EditableNumberProps = {
  type: "editableNumber";
  defaultValue?: string;
  placeholder?: string;
};

export function EditableNumberField() {
  const props = useField<EditableNumberProps>();
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
        <RaftyEditableNumber
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
