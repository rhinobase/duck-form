import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";

export type EditableNumberProps = {
  name?: string;
  type: "editableNumber";
  placeholder?: string;
  defaultValue?: number;
  value?: number;
  onChange?: (value?: number) => void;
};

export function EditableNumberField({
  type,
  onChange,
  ...props
}: EditableNumberProps) {
  return (
    <RaftyEditableNumber {...props} id={props.name} onValueChange={onChange} />
  );
}
