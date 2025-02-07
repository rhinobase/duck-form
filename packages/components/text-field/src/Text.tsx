import { from, type textSchema } from "@rhinobase/shared";
import type z from "zod";
import React from "react";

export type TextProps = z.infer<typeof textSchema>;

export function TextField({ content }: TextProps) {
  const updatedContent = from(content);

  return <>{updatedContent}</>;
}
