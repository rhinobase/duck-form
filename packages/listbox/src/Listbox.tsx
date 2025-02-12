import { Listbox as RaftyListbox } from "@rafty/corp";
import { type listboxSchema, useEvaluate } from "@rhinobase/shared";
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
  const props = {
    name,
    defaultValue,
    value,
    options,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyListbox
      {...fieldProps}
      items={fieldProps.options}
      onValueChange={fieldProps.onChange}
    />
  );
}
