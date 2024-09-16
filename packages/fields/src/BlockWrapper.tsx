import type { PropsWithChildren } from "react";
import { FieldWrapper } from "./FieldWrapper";
import { TooltipWrapper } from "./TooltipWrapper";

export function BlockWrapper(props: PropsWithChildren) {
  return (
    <TooltipWrapper>
      <FieldWrapper>{props.children}</FieldWrapper>
    </TooltipWrapper>
  );
}
