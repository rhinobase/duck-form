import { EditableText as RaftyEditableText } from "@rafty/ui";
import type z from "zod";
import type { editableTextSchema } from "../validations";

export type EditableTextProps = z.infer<typeof editableTextSchema>;

export function EditableTextField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableTextProps) {
  return (
    <RaftyEditableText
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={onChange}
    />
  );
}
