"use client";
import { DatePicker as RaftyDatePicker } from "@rafty/ui";
import dayjs from "dayjs";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type DateFieldProps = {
  type: "date";
  placeholder?: string;
  defaultValue?: string;
};

export function DateField() {
  const props = useField<DateFieldProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const { isDebug } = useDebug() ?? {
    isDebug: false,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { onChange, value, ...field } }) => {
        const newValue = value && dayjs(value).format("YYYY-MM-DD");

        return (
          <RaftyDatePicker
            {...field}
            placeholder={props.placeholder}
            value={newValue}
            onValueChange={onChange}
            onPointerDownCapture={(event) =>
              isDebug && stopEventPropagation(event)
            }
            onKeyDownCapture={(event) => isDebug && stopEventPropagation(event)}
          />
        );
      }}
    />
  );
}
