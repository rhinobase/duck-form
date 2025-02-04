import { Switch as RaftySwitch } from "@rafty/ui";
import type { switchSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SwitchProps = z.infer<typeof switchSchema>;

export function SwitchField({
  defaultValue,
  value,
  onChange,
  name,
}: SwitchProps) {
  return (
    <RaftySwitch
      id={name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
