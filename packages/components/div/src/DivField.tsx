"use client";
import { evalProp, type divSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";

export type DivProps = typeof divSchema.infer;

export function DivField({ blocks, ...props }: DivProps) {
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
    <div {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </div>
  );
}
