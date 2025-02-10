import { Switch as RaftySwitch } from "@rafty/ui";
import { evalProp, type switchSchema } from "@rhinobase/shared";
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
    <RaftySwitch
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
