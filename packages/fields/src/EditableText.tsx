import { EditableText as RaftyEditableText } from "@rafty/ui";
import type { FieldType } from "./constants";

export type EditableTextProps = {
  name?: string;
  type: FieldType.EDITABLE_TEXT;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function EditableTextField({
  type,
  onChange,
  ...props
}: EditableTextProps) {
  return (
    <RaftyEditableText {...props} id={props.name} onValueChange={onChange} />
  );
}
