import { useDuckForm, useField } from "duck-form";
import { useId } from "react";
import type z from "zod";
import type { textSchema } from "./validations";

export type TextProps = z.infer<typeof textSchema>;

export function Text() {
  const props = useField<TextProps>();
  const { resolverKey } = useDuckForm();
  const { className, content } = props;

  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof TextProps]) ?? autoId;

  return (
    <p id={componentId} {...fieldProps}>
      {content}
    </p>
  );
}
