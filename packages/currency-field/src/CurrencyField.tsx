import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui/currency-input";
import { type currencyInputSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type CurrencyInputProps = z.infer<typeof currencyInputSchema>;

export function CurrencyField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, value, defaultValue, currencyCode, onChange } =
    useField<CurrencyInputProps>();

  const props = { name, value, defaultValue, currencyCode, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyCurrencyInput
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
    />
  );
}
