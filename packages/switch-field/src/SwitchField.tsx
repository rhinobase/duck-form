import { Switch as RaftySwitch } from "@rafty/ui/switch";
import { type switchSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type SwitchProps = z.infer<typeof switchSchema>;

export function SwitchField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { defaultValue, value, onChange, name } = useField<SwitchProps>();

  const props = {
    name,
    defaultValue,
    value,
    onChange,
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
    <RaftySwitch
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      defaultChecked={fieldProps.defaultValue}
      checked={fieldProps.value}
      onCheckedChange={fieldProps.onChange}
    />
  );
}
