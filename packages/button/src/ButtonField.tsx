"use client";
import { Button as RaftyButton } from "@rafty/ui/button";
import { DuckField, useField, usePageContext } from "duck-form";
import React from "react";
import z from "zod";

const buttonSchema = z.object({
  ariaLabel: z.string().optional(),
  loading: z.union([
    z.boolean(),
    z
      .string()
      .trim()
      .toLowerCase()
      .transform((val) => !(val === "false" || val === "0" || val === "")),
  ]),
});

export type ButtonProps = {
  id: string;
  blocks: Record<string, unknown>;
};

export function ButtonField() {
  const { id, blocks } = useField<ButtonProps>();
  const props = usePageContext<{
    [K in keyof z.infer<typeof buttonSchema>]: string;
  }>((state) => {
    // @ts-expect-error
    const _state = state.context[id];

    return {
      ariaLabel: _state.ariaLabel,
      loading: _state.loading,
    };
  });

  const fieldProps = buttonSchema.parse(props);

  return (
    <RaftyButton {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} {...(items as object)} />
        ))}
    </RaftyButton>
  );
}
