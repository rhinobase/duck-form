import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import { evalProp, type percentageInputSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type PercentageInputProps = z.infer<typeof percentageInputSchema>;

export function PercentageField({
  defaultValue,
  name,
  onChange,
  value,
}: PercentageInputProps) {
  const props = { name, defaultValue, value, onChange };

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
    <RaftyPercentageInput
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onChange={fieldProps.onChange}
    />
  );
}
