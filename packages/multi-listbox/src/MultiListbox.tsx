import { Listbox as RaftyListbox } from "@rafty/corp";
import { type multiListboxSchema, useEvaluate } from "@rhinobase/shared";
import { useField } from "duck-form";
import React from "react";
import type z from "zod";

export type MultiListboxProps = z.infer<typeof multiListboxSchema>;

export function MultiListbox() {
  const { options, onChange, defaultValue, name, value } =
    useField<MultiListboxProps>();
  const props = {
    name,
    value,
    defaultValue,
    onChange,
    options,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyListbox
      {...fieldProps}
      type="multi"
      items={fieldProps.options}
      onValueChange={fieldProps.onChange}
    />
  );
}
