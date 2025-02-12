import { type textSchema, useEvaluate } from "@rhinobase/shared";
import { useField } from "duck-form";
import React from "react";
import type z from "zod";

export type TextProps = z.infer<typeof textSchema>;

export function TextField() {
  const props = useField<TextProps>();
  const { value } = useEvaluate(props);

  return <>{value}</>;
}
