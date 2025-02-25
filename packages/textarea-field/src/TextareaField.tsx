import { Textarea as RaftyTextarea } from "@rafty/ui/textarea";
import { type textareaSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type TextareaProps = z.infer<typeof textareaSchema>;

export function TextareaField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { onChange, defaultValue, name, placeholder, value } =
    useField<TextareaProps>();

  const props = {
    name,
    placeholder,
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
    <RaftyTextarea
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onChange={(event) => fieldProps.onChange?.(event.target.value)}
    />
  );
}
