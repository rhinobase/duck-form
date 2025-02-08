import { evalProp, type defaultSchema } from "@rhinobase/shared";
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

  if (type === "fragment") return <>{children}</>;

  const fieldProps = Object.entries(props).reduce<Record<string, unknown>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        // @ts-expect-error
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {},
  );

  const Component = type as ElementType;
  return <Component {...fieldProps}>{children}</Component>;
}
