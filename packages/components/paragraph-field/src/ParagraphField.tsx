import type { paragraphSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type ParagraphProps = z.infer<typeof paragraphSchema>;

export function Paragraph({ blocks, className }: ParagraphProps) {
  const fieldProps = className ? { className } : {};

  return (
    <p {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </p>
  );
}
