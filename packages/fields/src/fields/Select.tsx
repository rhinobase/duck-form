import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import type z from "zod";
import type { selectSchema } from "../validations";

export type SelectProps = z.infer<typeof selectSchema>;

export function SelectField({
  onChange,
  options,
  defaultValue,
  name,
  placeholder,
  value,
}: SelectProps) {
  return (
    <RaftySelect
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        const value = e.currentTarget.value;
        let valueAsNumber: number | undefined = Number(value);

        if (Number.isNaN(valueAsNumber)) valueAsNumber = undefined;

        for (const option of options) {
          if (
            value === option.value ||
            (valueAsNumber && valueAsNumber === option.value)
          )
            return onChange?.(option.value);
        }
      }}
      className="w-full"
    >
      {options.map(({ value, label }, index) => (
        <SelectItem key={`${index}-${name}`} value={value}>
          {label ?? value}
        </SelectItem>
      ))}
    </RaftySelect>
  );
}
