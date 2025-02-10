import { InputField } from "@rafty/ui";
import { evalProp, type datetimeSchema } from "@rhinobase/shared";
import dayjs from "dayjs";
import React from "react";
import type z from "zod";

export type DatetimeFieldProps = z.infer<typeof datetimeSchema>;

export function DatetimeField({
  value,
  onChange,
  defaultValue,
  name,
  placeholder,
}: DatetimeFieldProps) {
  const props = {
    value,
    name,
    placeholder,
    defaultValue,
    onChange,
  };
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  const formattedValue = fieldProps.value
    ? dayjs(fieldProps.value).format("YYYY-MM-DDThh:mm")
    : undefined;

  return (
    <InputField
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      type="datetime-local"
      placeholder={fieldProps.placeholder}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
