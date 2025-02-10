import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import { evalProp, type editableNumberSchema } from "@rhinobase/shared";
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
    <RaftyEditableNumber
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      onValueChange={fieldProps.onChange}
    />
  );
}
