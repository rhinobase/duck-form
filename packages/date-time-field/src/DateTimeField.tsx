import { InputField } from "@rafty/ui/input-field";
import { type datetimeSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import dayjs from "dayjs";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type DatetimeFieldProps = z.infer<typeof datetimeSchema>;

export function DatetimeField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, value, placeholder, defaultValue, onChange } =
    useField<DatetimeFieldProps>();

  const props = {
    value,
    name,
    placeholder,
    defaultValue,
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

  const formattedValue = fieldProps.value
    ? dayjs(fieldProps.value).format("YYYY-MM-DDThh:mm")
    : undefined;

  return (
    <InputField
      {...fieldProps}
      name={componentId}
      type="datetime-local"
      id={fieldProps.name}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
