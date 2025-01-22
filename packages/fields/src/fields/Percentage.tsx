import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import type z from "zod";
import type { percentageInputSchema } from "../validations";

export type PercentageInputProps = z.infer<typeof percentageInputSchema>;

export function PercentageField({
  defaultValue,
  name,
  onChange,
  value,
}: PercentageInputProps) {
  return (
    <RaftyPercentageInput
      id={name}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
    />
  );
}
