import { TagField as RaftyTagField } from "@rafty/ui";
import type { tagSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type TagFieldProps = z.infer<typeof tagSchema>;

export function TagField({
  onChange,
  defaultValue,
  name,
  value,
}: TagFieldProps) {
  return (
    <RaftyTagField
      id={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={({ value }) => onChange?.(value)}
    />
  );
}
