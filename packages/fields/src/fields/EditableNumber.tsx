import { EditableNumber as RaftyEditableNumber } from "@rafty/ui";
import type { BlockType } from "../constants";

export type EditableNumberProps = {
  name?: string;
  type: BlockType.EDITABLE_NUMBER;
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
