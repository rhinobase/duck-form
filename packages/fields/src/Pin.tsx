import { PinInput as RaftyPinInput } from "@rafty/ui";
import type { FieldType } from "./constants";

export type PinInputProps = {
  name?: string;
  type: FieldType.PIN;
  length: number;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string[]) => void;
};

export function PinField({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: PinInputProps) {
  const formattedValue = value ? Array.from<string>(value) : undefined;
  const formattedDefaultValue = defaultValue
    ? Array.from<string>(defaultValue)
    : undefined;

  return (
    <RaftyPinInput
      {...props}
      id={props.name}
      defaultValue={formattedDefaultValue}
      value={formattedValue}
      onValueChange={({ value }) => onChange?.(value)}
    />
  );
}
