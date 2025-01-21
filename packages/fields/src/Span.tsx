import { DuckField, useDuckForm, useField } from "duck-form";
import { useId, type HTMLAttributes } from "react";
import type { BlockType } from "./constants";
import type { FieldProps } from "./types";

export type SpanProps = {
  type: BlockType.SPAN;
  blocks?: Record<string, FieldProps>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function Span() {
  const props = useField<SpanProps>();
  const { resolverKey } = useDuckForm();
  const { className, blocks } = props;

  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof SpanProps]) ?? autoId;

  return (
    <span {...fieldProps} id={componentId}>
      {blocks &&
        Object.keys(blocks).map((key) => {
          const nestedProps = {
            [resolverKey]: `${componentId}.${key}`,
          };

          return <DuckField key={key} {...nestedProps} />;
        })}
    </span>
  );
}
