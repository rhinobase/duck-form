import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import type z from "zod";
import type { checkboxSchema } from "../validations";

export type CheckboxProps = z.infer<typeof checkboxSchema>;

export function CheckboxField({
  defaultValue,
  value,
  onChange,
  name,
}: CheckboxProps) {
  return (
    <RaftyCheckbox
      id={name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
