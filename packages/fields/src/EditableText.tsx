import { EditableText as RaftyEditableText } from "@rafty/ui";

export type EditableTextProps = {
  name?: string;
  type: "editableText";
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
