import { EditableText as RaftyEditableText } from "@rafty/ui/editable-text";
import { type editableTextSchema, useEvaluate } from "@rhinobase/shared";
import { useDuckForm, useBlueprint, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type EditableTextProps = z.infer<typeof editableTextSchema>;

export function EditableTextField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, placeholder, value, defaultValue, onChange } =
    useField<EditableTextProps>();

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
    <RaftyEditableText
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
