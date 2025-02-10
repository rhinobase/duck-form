"use client";
import { evalProp, type linkSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type LinkProps = z.infer<typeof linkSchema>;

export function LinkComponent({ blocks, ...props }: LinkProps) {
  const { link, fieldProps } = Object.entries(props).reduce<
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    Record<string, any>
  >((prev, [key, val]) => {
    if (
      val &&
      typeof val === "object" &&
      "type" in val &&
      (val.type === "literal" || val.type === "script")
    ) {
      prev[key] = evalProp(val);
    }

    return prev;
  }, {});

  return (
    <a href={link} {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </a>
  );
}
