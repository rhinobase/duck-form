import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import { evalProp, type currencyInputSchema } from "@rhinobase/shared";
import React from "react";

export type CurrencyInputProps = typeof currencyInputSchema.infer;

export function CurrencyField({
  currencyCode,
  defaultValue,
  name,
  onChange,
  value,
}: CurrencyInputProps) {
  const props = { name, value, defaultValue, currencyCode, onChange };

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
    <RaftyCurrencyInput
      id={fieldProps.name}
      currencyCode={fieldProps.currencyCode}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onChange={fieldProps.onChange}
    />
  );
}
