import { useField, usePageContext } from "duck-form";
import React from "react";
import { useShallow } from "zustand/react/shallow";

export type TextProps = { id: string };

export function TextField() {
  const { id } = useField<TextProps>();
  const value = usePageContext<string>(
    useShallow(
      (state) =>
        // @ts-expect-error
        state.context[id].value
    )
  );

  return <p>{value}</p>;
}
