import { Select as RaftySelect, SelectItem } from "@rafty/ui";

export type SelectProps = {
  name?: string;
  type: "select";
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
