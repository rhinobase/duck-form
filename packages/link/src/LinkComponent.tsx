"use client";
import { type linkSchema, useEvaluate } from "@rhinobase/shared";
import { DuckField, useField } from "duck-form";
import React from "react";
import type z from "zod";

export type LinkProps = z.infer<typeof linkSchema>;

export function LinkComponent() {
  const { blocks, type, ...props } = useField<LinkProps>();
  const { link, ...fieldProps } = useEvaluate(props);

  return (
    <a href={link} {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </a>
  );
}
