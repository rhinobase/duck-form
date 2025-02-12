import { type textSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type TextProps = z.infer<typeof textSchema>;

export function TextField(props: TextProps) {
  const { content } = useEvaluate(props);

  return <>{content}</>;
}
