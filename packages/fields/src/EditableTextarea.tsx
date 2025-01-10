import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import type { FieldType } from "./constants";

export type EditableTextareaProps = {
  name?: string;
  type: FieldType.EDITABLE_TEXTAREA;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function EditableTextareaField({
  type,
  onChange,
  ...props
}: EditableTextareaProps) {
  return (
    <RaftyEditableTextarea
      {...props}
      id={props.name}
      onValueChange={onChange}
    />
  );
}
