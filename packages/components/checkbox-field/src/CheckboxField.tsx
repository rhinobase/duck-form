import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import { evalProp, type checkboxSchema } from "@rhinobase/shared";
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
    <RaftyCheckbox
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
