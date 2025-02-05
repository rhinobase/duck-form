import type { defaultSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React, { type ElementType } from "react";
import type z from "zod";

export type DefaultProps = z.infer<typeof defaultSchema>;

export function DefaultField({ blocks, type, ...props }: DefaultProps) {
  const children =
    blocks &&
    Object.entries(blocks).map(([key, items]) => (
      <DuckField key={key} id={key} {...(items as object)} />
    ));

  if (type === "Fragment") return <>{children}</>;

  const Component = type as ElementType;
  return <Component {...props}>{children}</Component>;
}
