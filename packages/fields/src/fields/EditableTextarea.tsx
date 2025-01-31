import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import type z from "zod";
import type { editableTextareaSchema } from "../validations";

export type EditableTextareaProps = z.infer<typeof editableTextareaSchema>;

export function EditableTextareaField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableTextareaProps) {
  return (
    <RaftyEditableTextarea
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={onChange}
    />
  );
}
