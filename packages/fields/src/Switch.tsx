"use client";
import { Switch as RaftySwitch } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type SwitchProps = {
  type: "switch";
  defaultValue?: boolean;
};

export function SwitchField() {
  const props = useField<SwitchProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { name, onChange, value, ...field } }) => (
        <RaftySwitch
          {...field}
          id={name}
          name={name}
          checked={value}
          onCheckedChange={onChange}
        />
      )}
    />
  );
}
