"use client";
import {
  SegmentedControl as RaftySegmentedControl,
  SegmentedControlItem,
} from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type SegmentedControlProps = {
  type: "segmentedControl";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
};

export function SegmentedControlField() {
  const props = useField<SegmentedControlProps>();
  const { control } = useFormContext();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { name, onChange, ...field } }) => (
        <RaftySegmentedControl
          {...field}
          id={name}
          name={name}
          onValueChange={onChange}
        >
          {props.options.map(({ value, label }) => (
            <SegmentedControlItem key={value} value={value}>
              {label ?? value}
            </SegmentedControlItem>
          ))}
        </RaftySegmentedControl>
      )}
    />
  );
}
