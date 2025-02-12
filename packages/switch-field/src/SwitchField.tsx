import { Switch as RaftySwitch } from "@rafty/ui/switch";
import { type switchSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SwitchProps = z.infer<typeof switchSchema>;

export function SwitchField({
  defaultValue,
  value,
  onChange,
  name,
}: SwitchProps) {
  const props = {
    name,
    defaultValue,
    value,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftySwitch
      {...fieldProps}
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
