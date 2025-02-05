import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import type { sliderSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SliderProps = z.infer<typeof sliderSchema>;

export function SliderField({
  defaultValue,
  value,
  onChange,
  max = 100,
  min = 0,
  step = 1,
  name,
}: SliderProps) {
  return (
    <RaftySlider
      id={name}
      name={name}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={(value) => onChange?.(Number(value[0]))}
      className="mb-8 mt-5"
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </RaftySlider>
  );
}
