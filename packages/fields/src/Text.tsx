import { useField } from "duck-form";
import type { HTMLAttributes } from "react";

export type TextProps = {
  type: "text";
  id: string;
  content: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
};

export function Text() {
  const { id, content, className } = useField<TextProps>();

  const fieldProps = className ? { className } : {};

  return (
    <p id={id} {...fieldProps}>
      {content}
    </p>
  );
}
