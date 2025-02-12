import { InputField } from "@rafty/ui/input-field";
import { type dateSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import dayjs from "dayjs";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type DateFieldProps = z.infer<typeof dateSchema>;

export function DateField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, value, defaultValue, placeholder, onChange } =
    useField<DateFieldProps>();

  const props = { name, value, defaultValue, placeholder, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  const formattedValue = fieldProps.value
    ? dayjs(fieldProps.value).format("YYYY-MM-DD")
    : undefined;

  return (
    <InputField
      {...fieldProps}
      name={componentId}
      type="date"
      id={fieldProps.name}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
