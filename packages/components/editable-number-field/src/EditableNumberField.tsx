import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import { type editableNumberSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type EditableNumberProps = z.infer<typeof editableNumberSchema>;

export function EditableNumberField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableNumberProps) {
  const props = { name, placeholder, value, defaultValue, onChange };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyEditableNumber
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
