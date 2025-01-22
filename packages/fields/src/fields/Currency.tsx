import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import type z from "zod";
import type { currencyInputSchema } from "../validations";

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
