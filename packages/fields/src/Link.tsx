import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import type z from "zod";
import type { linkSchema } from "./validations";

export type LinkProps = z.infer<typeof linkSchema>;

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
