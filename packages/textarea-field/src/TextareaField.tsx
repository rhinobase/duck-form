import { Textarea as RaftyTextarea } from "@rafty/ui";
import { type textareaSchema, useEvaluate } from "@rhinobase/shared";
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
  const props = {
    name,
    placeholder,
    defaultValue,
    value,
    onChange,
  };
  const fieldProps = useEvaluate(props);

  return (
    <RaftyTextarea
      {...fieldProps}
      id={fieldProps.name}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
