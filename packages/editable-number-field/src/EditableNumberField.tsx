import { EditableNumber as RaftyEditableNumber } from "@rafty/ui/editable-number";
import { type editableNumberSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type EditableNumberProps = z.infer<typeof editableNumberSchema>;

export function EditableNumberField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, placeholder, value, defaultValue, onChange } =
    useField<EditableNumberProps>();

  const props = { name, placeholder, value, defaultValue, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftyEditableNumber
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
