import { ColorPicker as RaftyColorPicker, useBoolean } from "@rafty/ui";
import type { colorPickerSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type ColorPickerProps = z.infer<typeof colorPickerSchema>;

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
