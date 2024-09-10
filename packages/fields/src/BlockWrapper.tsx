import type { PropsWithChildren } from "react";
import { FieldWrapper, TooltipWrapper } from "./utils";

export function BlockWrapper(props: PropsWithChildren) {
  return (
    <TooltipWrapper>
      <FieldWrapper>{props.children}</FieldWrapper>
    </TooltipWrapper>
  );
}
