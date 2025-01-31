import { Textarea as RaftyTextarea } from "@rafty/ui";
import type z from "zod";
import type { textareaSchema } from "../validations";

export type TextareaProps = z.infer<typeof textareaSchema>;

export function TextareaField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: TextareaProps) {
  return (
    <RaftyTextarea
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
