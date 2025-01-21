import { DuckField, useDuckForm, useField } from "duck-form";
import { useId, type HTMLAttributes } from "react";
import type { BlockType } from "./constants";
import type { FieldProps } from "./types";

export type LinkProps = {
  type: BlockType.LINK;
  id: string;
  blocks?: Record<string, FieldProps>;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  link?: string;
};

export function Link() {
  const props = useField<LinkProps>();
  const { resolverKey } = useDuckForm();
  const { className, blocks, link } = props;

  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof LinkProps]) ?? autoId;

  return (
    <a id={componentId} href={link} {...fieldProps}>
      {blocks &&
        Object.keys(blocks).map((key) => {
          const nestedProps = {
            [resolverKey]: `${componentId}.${key}`,
          };

          return <DuckField key={key} {...nestedProps} />;
        })}
    </a>
  );
}
