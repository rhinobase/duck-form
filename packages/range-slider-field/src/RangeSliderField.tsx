import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui/slider";
import { type rangeSliderSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type RangeSliderProps = z.infer<typeof rangeSliderSchema>;

export function RangeSliderField({
  onChange,
  defaultValue = { type: "literal", value: [0, 0] },
  max,
  min,
  name,
  step,
  value,
}: RangeSliderProps) {
  const props = {
    name,
    value,
    min,
    max,
    defaultValue,
    onChange,
    step,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftySlider
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={(value) => {
        fieldProps.onChange?.(value.splice(0, 2));
      }}
      className="mb-8 mt-5"
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
      <SliderThumb />
    </RaftySlider>
  );
}
