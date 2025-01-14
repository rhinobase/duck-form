import { InputField } from "@rafty/ui";
import type { FieldType } from "./constants";

export type DatetimeFieldProps = {
  name?: string;
  type: FieldType.DATE_TIME;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function DatetimeField({
  type,
  value,
  onChange,
  ...props
}: DatetimeFieldProps) {
  return (
    <InputField
      {...props}
      id={props.name}
      type="datetime-local"
      placeholder={props.placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
}
