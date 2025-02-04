import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import type { currencyInputSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type CurrencyInputProps = z.infer<typeof currencyInputSchema>;

export function CurrencyField({
  currencyCode,
  defaultValue,
  name,
  onChange,
  value,
}: CurrencyInputProps) {
  return (
    <RaftyCurrencyInput
      id={name}
      currencyCode={currencyCode}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}
