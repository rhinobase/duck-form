import { Button as RaftyButton } from "@rafty/ui";
import type { buttonSchema } from "@rhinobase/shared";
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

  return (
    <RaftyButton {...fieldProps}>
      {props.blocks &&
        Object.entries(props.blocks).map(([key, items]) => (
          <DuckField key={key} {...items} />
        ))}
    </RaftyButton>
  );
}
