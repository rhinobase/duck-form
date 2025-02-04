import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import type { rangeSliderSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type RangeSliderProps = z.infer<typeof rangeSliderSchema>;

export function RangeSliderField({
  onChange,
  defaultValue = [0, 0],
  max,
  min,
  name,
  step,
  value,
}: RangeSliderProps) {
  return (
    <RaftySlider
      id={name}
      max={max}
      min={min}
      name={name}
      step={step}
      value={value}
      defaultValue={defaultValue}
      onValueChange={(value) => {
        // @ts-expect-error
        onChange?.(value.splice(0, 2));
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
