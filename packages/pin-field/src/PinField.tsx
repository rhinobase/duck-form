import { PinInput as RaftyPinInput } from "@rafty/ui/pin-input";
import { type pinSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type PinInputProps = z.infer<typeof pinSchema>;

export function PinField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, placeholder, defaultValue, value, onChange, length } =
    useField<PinInputProps>();

  const props = { name, placeholder, defaultValue, value, onChange, length };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  const formattedValue = fieldProps.value
    ? Array.from<string>(fieldProps.value)
    : undefined;
  const formattedDefaultValue = defaultValue
    ? Array.from<string>(fieldProps.defaultValue)
    : undefined;

  return (
    <RaftyPinInput
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      length={fieldProps.length}
      defaultValue={formattedDefaultValue}
      value={formattedValue}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
