import { TagField as RaftyTagField } from "@rafty/ui";
import { type tagSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type TagFieldProps = z.infer<typeof tagSchema>;

export function TagField({
  onChange,
  defaultValue,
  name,
  value,
}: TagFieldProps) {
  const props = {
    name,
    defaultValue,
    value,
    onChange,
  };
  const fieldProps = useEvaluate(props);

  return (
    <RaftyTagField
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
