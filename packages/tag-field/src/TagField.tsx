import { TagField as RaftyTagField } from "@rafty/ui/tag-field";
import { type tagSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type TagFieldProps = z.infer<typeof tagSchema>;

export function TagField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { onChange, defaultValue, name, value } = useField<TagFieldProps>();

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
    <RaftyTagField
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
