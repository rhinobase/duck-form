import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import type z from "zod";
import type { divSchema } from "./validations";

export type DivProps = z.infer<typeof divSchema>;

export function Div() {
  const props = useField<DivProps>();
  const { resolverKey } = useDuckForm();
  const { className, blocks } = props;

  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof DivProps]) ?? autoId;

  return (
    <div {...fieldProps} id={componentId}>
      {blocks &&
        Object.keys(blocks).map((key) => {
          const nestedProps = {
            [resolverKey]: `${componentId}.${key}`,
          };

          return <DuckField key={key} {...nestedProps} />;
        })}
    </div>
  );
}
