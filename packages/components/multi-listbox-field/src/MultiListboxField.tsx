import { Listbox as RaftyListbox } from "@rafty/corp";
import type { multiListboxSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type MultiListboxProps = z.infer<typeof multiListboxSchema>;

export default function MultiListboxField({
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
