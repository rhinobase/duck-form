import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { type numberSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type NumberProps = z.infer<typeof numberSchema>;

export function NumberField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const {
    onChange,
    step,
    defaultValue,
    inputMode,
    max,
    min,
    name,
    placeholder,
    value,
  } = useField<NumberProps>();

  const props = {
    onChange,
    step,
    defaultValue,
    inputMode,
    max,
    min,
    name,
    placeholder,
    value,
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
    <RaftyInputField
      {...fieldProps}
      name={componentId}
      type="number"
      id={fieldProps.name}
      onChange={(event) => {
        const value = event.target.value;

        fieldProps.onChange?.(value !== "" ? Number(value) : undefined);
      }}
    />
  );
}
