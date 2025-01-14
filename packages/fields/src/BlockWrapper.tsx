import type { PropsWithChildren } from "react";
import { FieldWrapper } from "./FieldWrapper";
import { TooltipWrapper } from "./TooltipWrapper";
import { useField } from "duck-form";
import { FieldType } from "./constants";
import { InputWrapper } from "./InputWrapper";

export function BlockWrapper(props: PropsWithChildren) {
  const { type } = useField();

  const Wrapper = ({ children }: PropsWithChildren) => (
    <TooltipWrapper>
      <FieldWrapper>{children}</FieldWrapper>
    </TooltipWrapper>
  );

  if (
    type === FieldType.NUMBER ||
    type === FieldType.PASSWORD ||
    type === FieldType.STRING
  )
    return (
      <Wrapper>
        <InputWrapper>{props.children}</InputWrapper>
      </Wrapper>
    );

  return <Wrapper>{props.children}</Wrapper>;
}
