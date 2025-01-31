import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import type z from "zod";
import type { spanSchema } from "./validations";

export type SpanProps = z.infer<typeof spanSchema>;

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
