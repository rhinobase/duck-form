import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import { type editableTextareaSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type EditableTextareaProps = z.infer<typeof editableTextareaSchema>;

export function EditableTextareaField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableTextareaProps) {
  const props = {
    name,
    placeholder,
    defaultValue,
    value,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyEditableTextarea
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
