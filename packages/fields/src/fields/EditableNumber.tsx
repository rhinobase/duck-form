import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import type z from "zod";
import type { editableNumberSchema } from "../validations";

export type EditableNumberProps = z.infer<typeof editableNumberSchema>;

export function EditableNumberField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: EditableNumberProps) {
  return (
    <RaftyEditableNumber
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={onChange}
    />
  );
}
