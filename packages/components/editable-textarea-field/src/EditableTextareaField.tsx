import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import { evalProp, type editableTextareaSchema } from "@rhinobase/shared";
import React from "react";

export type EditableTextareaProps = typeof editableTextareaSchema.infer;

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
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyEditableTextarea
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      onValueChange={fieldProps.onChange}
    />
  );
}
