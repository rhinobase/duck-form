import { Textarea as RaftyTextarea } from "@rafty/ui";
import { evalProp, type textareaSchema } from "@rhinobase/shared";
import React from "react";

export type TextareaProps = typeof textareaSchema.infer;

export function TextareaField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: TextareaProps) {
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
    <RaftyTextarea
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      placeholder={fieldProps.placeholder}
      value={fieldProps.value}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
