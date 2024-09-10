"use client";
import { Listbox as RaftyListbox } from "@rafty/corp";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller } from "react-hook-form";

export type MultiListboxProps = {
  type: "multiListbox";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string[];
};

export function MultiListboxField() {
  const props = useField<MultiListboxProps>();

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
      render={({ field: { name, onChange, ref, value, disabled } }) => (
        <RaftyListbox
          name={name}
          type="multi"
          items={props.options}
          onValueChange={onChange}
          value={value}
          isDisabled={disabled}
          ref={ref}
        />
      )}
    />
  );
}
