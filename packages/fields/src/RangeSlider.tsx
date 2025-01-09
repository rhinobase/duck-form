"use client";
import {
  Slider as RaftySlider,
  type Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";

export type RangeSliderProps = Pick<Slider, "min" | "max" | "step"> & {
  name?: string;
  type: "rangeSlider";
  defaultValue?: [number, number];
  value?: [number, number];
  onChange?: (value?: [number, number]) => void;
};

export function RangeSliderField({
  type,
  onChange,
  defaultValue = [0, 0],
  ...props
}: RangeSliderProps) {
  return (
    <RaftySlider
      {...props}
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
