import type { InputField } from "@rafty/ui";
import { InputField as RaftyInputField } from "@rafty/ui";
import type { BlockType } from "../constants";

export type NumberProps = {
  name?: string;
  type: BlockType.NUMBER;
  placeholder?: string;
  inputMode?: "none" | "numeric" | "decimal";
  min?: InputField["min"];
  max?: InputField["max"];
  defaultValue?: number;
  step?: number | "any";
  value?: number;
  onChange?: (value?: number) => void;
};

export function NumberField({ type, onChange, step, ...props }: NumberProps) {
  return (
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
  );
}
