import { DuckField, useDuckForm, useField } from "duck-form";
import { useId, type HTMLAttributes } from "react";
import type { BlockType } from "./constants";
import type { FieldProps } from "./types";

export type ParagraphProps = {
  type: BlockType.PARAGRAPH;
  blocks?: Record<string, FieldProps>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function Paragraph() {
  const props = useField<ParagraphProps>();
  const { resolverKey } = useDuckForm();
  const { className, blocks } = props;

  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId =
    String(props[resolverKey as keyof ParagraphProps]) ?? autoId;

  return (
    <p id={componentId} {...fieldProps}>
      {blocks &&
        Object.keys(blocks).map((key) => {
          const nestedProps = {
            [resolverKey]: `${componentId}.${key}`,
          };

          return <DuckField key={key} {...nestedProps} />;
        })}
    </p>
  );
}
