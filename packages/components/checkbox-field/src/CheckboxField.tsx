import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import type { checkboxSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type CheckboxProps = z.infer<typeof checkboxSchema>;

export function CheckboxField({
  defaultValue,
  value,
  onChange,
  name,
}: CheckboxProps) {
  return (
    <RaftyCheckbox
      id={name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
