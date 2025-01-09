import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";

export type EditableTextareaProps = {
  name?: string;
  type: "editableTextarea";
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
