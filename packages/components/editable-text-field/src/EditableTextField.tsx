import { EditableText as RaftyEditableText } from "@rafty/ui";
import type { editableTextSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type EditableTextProps = z.infer<typeof editableTextSchema>;

export function EditableTextField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableTextProps) {
  return (
    <RaftyEditableText
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={onChange}
    />
  );
}
