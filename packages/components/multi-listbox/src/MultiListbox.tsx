import { Listbox as RaftyListbox } from "@rafty/corp";
import { evalProp, type multiListboxSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type MultiListboxProps = z.infer<typeof multiListboxSchema>;

export function MultiListbox({
  options,
  onChange,
  defaultValue,
  name,
  value,
}: MultiListboxProps) {
  const props = {
    name,
    value,
    defaultValue,
    onChange,
    options,
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
      name={fieldProps.name}
      type="multi"
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      items={fieldProps.options}
      onValueChange={fieldProps.onChange}
    />
  );
}
