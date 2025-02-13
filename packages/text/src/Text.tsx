import { type textSchema, usePageContext } from "@rhinobase/shared";
import { useField } from "duck-form";
import React from "react";
import type z from "zod";

export type TextProps = z.infer<typeof textSchema>;

export function TextField() {
  // @ts-expect-error
  const { id } = useField<TextProps>();
  const { value } = usePageContext(
    // @ts-expect-error
    (state) => state.context[id],
  );

  return <>{value}</>;
}
