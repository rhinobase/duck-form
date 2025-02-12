import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { type stringSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type StringProps = z.infer<typeof stringSchema>;

export function StringField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const {
    onChange,
    inputType,
    defaultValue,
    inputMode,
    maxLength,
    minLength,
    name,
    placeholder,
    value,
  } = useField<StringProps>();

  const props = {
    onChange,
    inputType,
    defaultValue,
    inputMode,
    maxLength,
    minLength,
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
      id={fieldProps.name}
      type={fieldProps.inputType}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
