import { Listbox as RaftyListbox } from "@rafty/corp";
import type { listboxSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type ListboxProps = z.infer<typeof listboxSchema>;

export function Listbox({
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
