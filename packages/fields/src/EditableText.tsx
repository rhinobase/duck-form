"use client";
import { EditableText as RaftyEditableText } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type EditableTextProps = {
  type: "editableText";
  defaultValue?: string;
  placeholder?: string;
};

export function EditableTextField() {
  const props = useField<EditableTextProps>();

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
        <RaftyEditableText {...field} onValueChange={onChange} />
      )}
    />
  );
}
