import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui/editable-textarea";
import { type editableTextareaSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type EditableTextareaProps = z.infer<typeof editableTextareaSchema>;

export function EditableTextareaField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, placeholder, defaultValue, value, onChange } =
    useField<EditableTextareaProps>();

  const props = {
    name,
    placeholder,
    defaultValue,
    value,
    onChange,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyEditableTextarea
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
