import { Textarea as RaftyTextarea } from "@rafty/ui";
import type { textareaSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type TextareaProps = z.infer<typeof textareaSchema>;

export function TextareaField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: TextareaProps) {
  return (
    <RaftyTextarea
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
