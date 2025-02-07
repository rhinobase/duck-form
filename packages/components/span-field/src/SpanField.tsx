"use client";
import { from, type spanSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type SpanProps = z.infer<typeof spanSchema>;

export function SpanField({ blocks, className }: SpanProps) {
  const fieldProps = className ? { className: from(className) } : {};

  return (
    <span {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </span>
  );
}
