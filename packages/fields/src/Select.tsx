"use client";
import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFormContext } from "react-hook-form";

export type SelectProps = {
  type: "select";
  placeholder?: string;
  defaultValue?: string | number;
  options: {
    value: string | number;
    label?: string;
  }[];
};

export function SelectField() {
  const props = useField<SelectProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { register } = useFormContext();

  return (
    <RaftySelect
      id={componentId}
      placeholder={props.placeholder}
      className="w-full"
      {...register(componentId)}
    >
      {props.options.map(({ value, label }) => (
        <SelectItem key={value} value={value}>
          {label ?? value}
        </SelectItem>
      ))}
    </RaftySelect>
  );
}
