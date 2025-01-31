import { Listbox as RaftyListbox } from "@rafty/corp";
import type z from "zod";
import type { multiListboxSchema } from "../validations";

export type MultiListboxProps = z.infer<typeof multiListboxSchema>;

export function MultiListboxField({
  options,
  onChange,
  defaultValue,
  name,
  value,
}: MultiListboxProps) {
  return (
    <RaftyListbox
      name={name}
      type="multi"
      defaultValue={defaultValue}
      value={value}
      items={options}
      onValueChange={onChange}
    />
  );
}
