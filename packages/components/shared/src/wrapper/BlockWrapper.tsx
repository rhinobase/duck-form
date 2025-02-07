"use client";
import { useField } from "duck-form";
import React, { Fragment, type PropsWithChildren, type ReactNode } from "react";
import { BlockType } from "../utils";
import { FieldWrapper } from "./FieldWrapper.js";
import { InputWrapper } from "./InputWrapper.js";
import { TooltipWrapper } from "./TooltipWrapper.js";

export function BlockWrapper(props: PropsWithChildren) {
  const { type } = useField();

  let ComponentWrapper: (wrapperProps: PropsWithChildren) => ReactNode =
    Fragment;

  if (
    type === BlockType.NUMBER ||
    type === BlockType.PASSWORD ||
    type === BlockType.STRING
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
