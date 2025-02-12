import { Checkbox as RaftyCheckbox } from "@rafty/ui/checkbox";
import { type checkboxSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type CheckboxProps = z.infer<typeof checkboxSchema>;

export function CheckboxField({
  defaultValue,
  value,
  onChange,
  name,
}: CheckboxProps) {
  const props = {
    defaultValue,
    value,
    onChange,
    name,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyCheckbox
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
