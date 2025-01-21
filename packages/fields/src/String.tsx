import { InputField as RaftyInputField } from "@rafty/ui";
import type { BlockType } from "./constants";

export type StringProps = {
  name?: string;
  type: BlockType.STRING;
  inputType?: RaftyInputField["type"];
  placeholder?: string;
  inputMode?: RaftyInputField["inputMode"];
  maxLength?: number;
  minLength?: number;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function StringField({
  type,
  onChange,
  inputType,
  ...props
}: StringProps) {
  return (
    <RaftyInputField
      {...props}
      id={props.name}
      type={inputType}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
