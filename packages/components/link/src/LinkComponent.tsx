"use client";
import type { linkSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type LinkProps = z.infer<typeof linkSchema>;

export function LinkComponent({ className, blocks, link }: LinkProps) {
  const fieldProps = className ? { className } : {};

  return (
    <a href={link} {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </a>
  );
}
