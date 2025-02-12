"use client";
import { Button as RaftyButton } from "@rafty/ui";
import { type buttonSchema, useEvaluate } from "@rhinobase/shared";
import { DuckField } from "duck-form";
import React from "react";
import type z from "zod";

export type ButtonProps = z.infer<typeof buttonSchema>;

export function ButtonField({
  type,
  blocks,
  btnType,
  className,
  isLoading,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const props = {
    className,
    type: btnType,
    leftIcon,
    rightIcon,
    isLoading,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyButton {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} {...(items as object)} />
        ))}
    </RaftyButton>
  );
}
