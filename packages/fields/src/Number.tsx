import type { InputField } from "@rafty/ui";
import { InputField as RaftyInputField } from "@rafty/ui";
import { InputWrapper } from "./InputWrapper";

export type NumberProps = {
  name?: string;
  type: "number";
  placeholder?: string;
  inputMode?: "none" | "numeric" | "decimal";
  min?: InputField["min"];
  max?: InputField["max"];
  defaultValue?: number;
  step?: number;
  value?: number;
  onChange?: (value?: number) => void;
};

export function NumberField({
  type,
  onChange,
  step = 1,
  ...props
}: NumberProps) {
  return (
    <InputWrapper>
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
