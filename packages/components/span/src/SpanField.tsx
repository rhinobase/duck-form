"use client";
import { evalProp, type spanSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";

export type SpanProps = typeof spanSchema.infer;

export function SpanField({ blocks, ...props }: SpanProps) {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <span {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </span>
  );
}
