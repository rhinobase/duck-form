import { InputField as RaftyInputField } from "@rafty/ui";
import type z from "zod";
import type { stringSchema } from "../validations";

export type StringProps = z.infer<typeof stringSchema>;

export function StringField({
  onChange,
  inputType,
  defaultValue,
  inputMode,
  maxLength,
  minLength,
  name,
  placeholder,
  value,
}: StringProps) {
  return (
    <RaftyInputField
      id={name}
      defaultValue={defaultValue}
      inputMode={inputMode}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      value={value}
      type={inputType}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
