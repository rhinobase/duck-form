import { InputField as RaftyInputField } from "@rafty/ui";
import { InputWrapper, type InputWrapperProps } from "./InputWrapper";
import type { FieldType } from "./constants";

export type StringProps = {
  name?: string;
  type: FieldType.STRING;
  inputType?: RaftyInputField["type"];
  placeholder?: string;
  inputMode?: RaftyInputField["inputMode"];
  maxLength?: number;
  minLength?: number;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
} & InputWrapperProps;

export function StringField({
  type,
  onChange,
  inputType,
  size = "md",
  suffix,
  suffixIcon,
  prefix,
  prefixIcon,
  ...props
}: StringProps) {
  const inputWrapperProps = {
    size,
    suffix,
    suffixIcon,
    prefix,
    prefixIcon,
  };

  return (
    <InputWrapper {...inputWrapperProps}>
      <RaftyInputField
        {...props}
        id={props.name}
        type={inputType}
        onChange={(event) => onChange?.(event.target.value)}
      />
    </InputWrapper>
  );
}
