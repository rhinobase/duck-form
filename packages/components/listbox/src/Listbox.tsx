import { Listbox as RaftyListbox } from "@rafty/corp";
import { evalProp, type listboxSchema } from "@rhinobase/shared";
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

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyListbox
      items={fieldProps.options}
      name={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onValueChange={fieldProps.onChange}
    />
  );
}
