import { Listbox as RaftyListbox } from "@rafty/corp";
import type z from "zod";
import type { listboxSchema } from "../validations";

export type ListboxProps = z.infer<typeof listboxSchema>;

export function ListboxField({
  onChange,
  options,
  defaultValue,
  name,
  value,
}: ListboxProps) {
  return (
    <RaftyListbox
      items={options}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onChange}
    />
  );
}
