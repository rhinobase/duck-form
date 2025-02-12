import { type defaultSchema, useEvaluate } from "@rhinobase/shared";
import { DuckField, useField } from "duck-form";
import React, { type ElementType } from "react";
import type z from "zod";

export type DefaultProps = z.infer<typeof defaultSchema>;

export function DefaultField() {
  const { blocks, type, ...props } = useField<DefaultProps>();

  const children =
    blocks &&
    Object.entries(blocks).map(([key, items]) => (
      <DuckField key={key} id={key} {...(items as object)} />
    ));

  if (type === "fragment") return <>{children}</>;

  const fieldProps = useEvaluate(props);

  const Component = type as ElementType;
  return <Component {...fieldProps}>{children}</Component>;
}
