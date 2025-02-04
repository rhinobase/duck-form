import type { divSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type DivProps = z.infer<typeof divSchema>;

export function DivField({ blocks, className }: DivProps) {
  const fieldProps = className ? { className } : {};

  return (
    <div {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...items} />
        ))}
    </div>
  );
}
