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
      onChange={(e) => {
        const value = e.currentTarget.value;
        let valueAsNumber: number | undefined = Number(value);

        if (Number.isNaN(valueAsNumber)) valueAsNumber = undefined;

        for (const option of props.options) {
          if (
            value === option.value ||
            (valueAsNumber != null && valueAsNumber === option.value)
          )
            return onChange?.(option.value);
        }
      }}
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
