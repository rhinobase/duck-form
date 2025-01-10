import { Switch as RaftySwitch } from "@rafty/ui";

export type SwitchProps = {
  name?: string;
  type: "switch";
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
