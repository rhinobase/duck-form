import { InputField } from "@rafty/ui";
import { evalProp, type dateSchema } from "@rhinobase/shared";
import dayjs from "dayjs";
import React from "react";

export type DateFieldProps = typeof dateSchema.infer;

export function DateField({
  value,
  onChange,
  defaultValue,
  name,
  placeholder,
}: DateFieldProps) {
  const props = { name, value, defaultValue, placeholder, onChange };

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
    ? dayjs(fieldProps.value).format("YYYY-MM-DD")
    : undefined;

  return (
    <InputField
      id={fieldProps.name}
      type="date"
      placeholder={fieldProps.placeholder}
      defaultValue={fieldProps.defaultValue}
      value={formattedValue}
      onChange={(e) =>
        fieldProps.onChange?.(dayjs(e.target.value).toISOString())
      }
    />
  );
}
