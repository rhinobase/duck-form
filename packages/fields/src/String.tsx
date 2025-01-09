import { InputField as RaftyInputField } from "@rafty/ui";
import { InputWrapper } from "./InputWrapper";

export type StringProps = {
  name?: string;
  type: "string";
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
    <InputWrapper>
      <RaftyInputField
        {...props}
        id={props.name}
        type={inputType}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </InputWrapper>
  );
}
