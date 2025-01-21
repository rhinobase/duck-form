import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import type { BlockType } from "./constants";

export type CheckboxProps = {
  name?: string;
  type: BlockType.BOOLEAN;
  defaultValue?: boolean;
  value?: boolean;
  onChange?: (value: boolean) => void;
};

export function CheckboxField({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <RaftyCheckbox
      {...props}
      id={props.name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
