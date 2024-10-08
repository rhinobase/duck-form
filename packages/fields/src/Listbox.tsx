"use client";
import { Listbox as RaftyListbox } from "@rafty/corp";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller } from "react-hook-form";

export type ListboxProps = {
  type: "listbox";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
};

export function ListboxField() {
  const props = useField<ListboxProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  return (
    <Controller
      name={componentId}
      render={({ field: { onChange, ...field } }) => (
        <RaftyListbox
          {...field}
          items={props.options}
          onValueChange={onChange}
        />
      )}
    />
  );
}
