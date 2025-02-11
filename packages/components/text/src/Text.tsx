import { evalProp, type textSchema } from "@rhinobase/shared";
import React from "react";

export type TextProps = typeof textSchema.infer;

export function TextField(props: TextProps) {
  // @ts-expect-error
  const updatedContent = evalProp(props);

  return <>{updatedContent}</>;
}
