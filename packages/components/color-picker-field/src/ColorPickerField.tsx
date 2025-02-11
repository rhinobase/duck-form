import { ColorPicker as RaftyColorPicker } from "@rafty/ui";
import type { colorPickerSchema } from "@rhinobase/shared";
import React from "react";

export type ColorPickerProps = typeof colorPickerSchema.infer;

export function ColorPickerField({
  defaultValue,
  value,
  onChange,
  name,
}: ColorPickerProps) {
  const props = { name, value, defaultValue, onChange };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        // @ts-expect-error
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyColorPicker
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onValueChange={({ valueAsString }: { valueAsString: string }) =>
        fieldProps.onChange?.(valueAsString)
      }
    />
  );
}
