"use client";
import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type CheckboxProps = {
  type: "boolean";
  defaultValue?: boolean;
};

export function CheckboxField() {
  const props = useField<CheckboxProps>();
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
      render={({ field: { name, onChange, ref, value, disabled } }) => (
        <RaftyCheckbox
          id={name}
          name={name}
          checked={value}
          onCheckedChange={onChange}
          isDisabled={disabled}
          ref={ref}
        />
      )}
    />
  );
}
