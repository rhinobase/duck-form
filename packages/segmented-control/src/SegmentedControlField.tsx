import {
  SegmentedControl as RaftySegmentedControl,
  SegmentedControlItem,
} from "@rafty/ui/segmented-control";
import { type segmentedControlSchema, useEvaluate } from "@rhinobase/shared";
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

  const { options: fieldOptions, ...fieldProps } = useEvaluate(props);

  return (
    <RaftySegmentedControl
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    >
      {(
        fieldOptions as {
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
