import {
  SegmentedControl as RaftySegmentedControl,
  SegmentedControlItem,
} from "@rafty/ui";
import { evalProp, type segmentedControlSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SegmentedControlProps = z.infer<typeof segmentedControlSchema>;

export function SegmentedControlField({
  onChange,
  options,
  defaultValue,
  name,
  value,
}: SegmentedControlProps) {
  const props = {
    name,
    defaultValue,
    value,
    options,
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
    <RaftySegmentedControl
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onValueChange={fieldProps.onChange}
    >
      {(
        fieldProps.options as {
          value: string;
          label?: string | undefined;
        }[]
      ).map(({ value, label }, index) => (
        <SegmentedControlItem key={`${index}-${name}`} value={value}>
          {label ?? value}
        </SegmentedControlItem>
      ))}
    </RaftySegmentedControl>
  );
}
