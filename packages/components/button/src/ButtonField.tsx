"use client";
import { Button as RaftyButton } from "@rafty/ui";
import { evalProp, type buttonSchema } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type ButtonProps = z.infer<typeof buttonSchema>;

export function ButtonField(props: ButtonProps) {
  const fieldProps = {
    className: props.className,
    type: props.btnType,
    lefIcon: props.leftIcon,
    rightIcon: props.rightIcon,
    isLoading: props.isLoading,
  };

  const newFieldProps = Object.entries(fieldProps).reduce<
    Record<string, unknown>
  >((prev, [key, val]) => {
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
  }, {});

  return (
    <RaftyButton {...newFieldProps}>
      {props.blocks &&
        Object.entries(props.blocks).map(([key, items]) => (
          <DuckField key={key} {...(items as object)} />
        ))}
    </RaftyButton>
  );
}
