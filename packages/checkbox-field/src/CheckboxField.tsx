import { Checkbox as RaftyCheckbox } from "@rafty/ui/checkbox";
import { type checkboxSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type CheckboxProps = z.infer<typeof checkboxSchema>;

export function CheckboxField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, defaultValue, value, onChange } = useField<CheckboxProps>();

  const props = {
    defaultValue,
    value,
    onChange,
    name,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyCheckbox
      name={componentId}
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
