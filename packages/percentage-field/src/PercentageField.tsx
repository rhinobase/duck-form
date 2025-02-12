import { PercentageInput as RaftyPercentageInput } from "@rafty/ui/percentage-input";
import { type percentageInputSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type PercentageInputProps = z.infer<typeof percentageInputSchema>;

export function PercentageField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { defaultValue, name, onChange, value } =
    useField<PercentageInputProps>();

  const props = { name, defaultValue, value, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyPercentageInput
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
    />
  );
}
