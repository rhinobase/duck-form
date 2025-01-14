"use client";
import { useField } from "duck-form";
import { Fragment, type PropsWithChildren, type ReactNode } from "react";
import { FieldWrapper } from "./FieldWrapper";
import { InputWrapper } from "./InputWrapper";
import { TooltipWrapper } from "./TooltipWrapper";
import { FieldType } from "./constants";

export function BlockWrapper(props: PropsWithChildren) {
  const { type } = useField();

  let ComponentWrapper: (wrapperProps: PropsWithChildren) => ReactNode =
    Fragment;

  if (
    type === FieldType.NUMBER ||
    type === FieldType.PASSWORD ||
    type === FieldType.STRING
  )
    ComponentWrapper = InputWrapper;

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <ComponentWrapper>{props.children}</ComponentWrapper>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
