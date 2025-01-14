import type { InputField } from "@rafty/ui";
import { InputField as RaftyInputField } from "@rafty/ui";
import { InputWrapper, type InputWrapperProps } from "./InputWrapper";
import type { FieldType } from "./constants";

export type NumberProps = {
  name?: string;
  type: FieldType.NUMBER;
  placeholder?: string;
  inputMode?: "none" | "numeric" | "decimal";
  min?: InputField["min"];
  max?: InputField["max"];
  defaultValue?: number;
  step?: number;
  value?: number;
  onChange?: (value?: number) => void;
} & InputWrapperProps;

export function NumberField({
  type,
  onChange,
  step = 1,
  size = "md",
  suffix,
  suffixIcon,
  prefix,
  prefixIcon,
  ...props
}: NumberProps) {
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
        type="number"
        step={step}
        onChange={(event) => {
          const value = event.target.value;

          onChange?.(value !== "" ? Number(value) : undefined);
        }}
      />
    </InputWrapper>
  );
}
