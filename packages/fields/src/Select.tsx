import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import type { FieldType } from "./constants";

export type SelectProps = {
  name?: string;
  type: FieldType.SELECT;
  placeholder?: string;
  options: {
    value: string | number;
    label?: string;
  }[];
  defaultValue?: string | number;
  value?: string | number;
  onChange?: (value?: string | number) => void;
};

export function SelectField({ type, onChange, ...props }: SelectProps) {
  return (
    <RaftySelect
      {...props}
      id={props.name}
      onChange={(event) => onChange?.(event.target.value)}
      className="w-full"
    >
      {props.options.map(({ value, label }, index) => (
        <SelectItem key={`${index}-${props.name}`} value={value}>
          {label ?? value}
        </SelectItem>
      ))}
    </RaftySelect>
  );
}
