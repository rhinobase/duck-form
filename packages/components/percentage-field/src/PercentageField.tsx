import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import type { percentageInputSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

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
