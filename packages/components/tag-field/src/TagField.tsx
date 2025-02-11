import { TagField as RaftyTagField } from "@rafty/ui";
import { evalProp, type tagSchema } from "@rhinobase/shared";
import React from "react";

export type TagFieldProps = typeof tagSchema.infer;

export function TagField({
  onChange,
  defaultValue,
  name,
  value,
}: TagFieldProps) {
  const props = {
    name,
    defaultValue,
    value,
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
  return (
    <RaftyTagField
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onValueChange={({ value }) => fieldProps.onChange?.(value)}
    />
  );
}
