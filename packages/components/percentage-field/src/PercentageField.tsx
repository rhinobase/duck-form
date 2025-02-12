import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import { type percentageInputSchema, useEvaluate } from "@rhinobase/shared";
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

  const fieldProps = useEvaluate(props);

  return <RaftyPercentageInput {...fieldProps} id={fieldProps.name} />;
}
