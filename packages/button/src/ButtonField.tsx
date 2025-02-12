"use client";
import { Button as RaftyButton } from "@rafty/ui/button";
import { type buttonSchema, useEvaluate } from "@rhinobase/shared";
import { DuckField, useField } from "duck-form";
import React from "react";
import type z from "zod";

export type ButtonProps = z.infer<typeof buttonSchema>;

export function ButtonField() {
  const { blocks, btnType, className, isLoading, leftIcon, rightIcon } =
    useField<ButtonProps>();

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
