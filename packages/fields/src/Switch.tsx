import { Switch as RaftySwitch } from "@rafty/ui";
import type { BlockType } from "./constants";

export type SwitchProps = {
  name?: string;
  type: BlockType.SWTICH;
  defaultValue?: boolean;
  value?: boolean;
  onChange?: (value?: boolean) => void;
};

export function SwitchField({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: SwitchProps) {
  return (
    <RaftySwitch
      {...props}
      id={props.name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
