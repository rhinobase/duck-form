import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import type { editableTextareaSchema } from "@rhinobase/shared";
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
  return (
    <RaftyEditableTextarea
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={onChange}
    />
  );
}
