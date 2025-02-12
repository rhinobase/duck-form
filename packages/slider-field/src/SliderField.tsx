import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui/slider";
import { type sliderSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SliderProps = z.infer<typeof sliderSchema>;

export function SliderField({
  defaultValue,
  value,
  onChange,
  max = { type: "literal", value: 100 },
  min = { type: "literal", value: 0 },
  step = { type: "literal", value: 1 },
  name,
}: SliderProps) {
  const props = {
    name,
    defaultValue,
    step,
    max,
    min,
    value,
    onChange,
  };
  const fieldProps = useEvaluate(props);

  return (
    <RaftySlider
      {...fieldProps}
      id={fieldProps.name}
      defaultValue={
        fieldProps.defaultValue ? [fieldProps.defaultValue] : undefined
      }
      value={fieldProps.value ? [fieldProps.value] : undefined}
      onValueChange={(value) => fieldProps.onChange?.(Number(value[0]))}
      className="mb-8 mt-5"
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </RaftySlider>
  );
}
