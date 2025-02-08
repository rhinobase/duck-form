import { evalProp, type textSchema } from "@rhinobase/shared";
import type z from "zod";
import React from "react";

export type TextProps = z.infer<typeof textSchema>;

export function TextField(props: TextProps) {
  // @ts-expect-error
  const updatedContent = evalProp(props);

  return <>{updatedContent}</>;
}
