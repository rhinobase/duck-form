import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import type z from "zod";
import type { paragraphSchema } from "./validations";

export type ParagraphProps = z.infer<typeof paragraphSchema>;

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
