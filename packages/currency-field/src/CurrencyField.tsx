import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui/currency-input";
import { type currencyInputSchema, useEvaluate } from "@rhinobase/shared";
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
  const props = { name, value, defaultValue, currencyCode, onChange };

  const fieldProps = useEvaluate(props);

  return <RaftyCurrencyInput {...fieldProps} id={fieldProps.name} />;
}
