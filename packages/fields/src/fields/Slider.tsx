import {
  Slider as RaftySlider,
  type Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import type { BlockType } from "../constants";

export type SliderProps = Pick<
  Slider,
  "min" | "max" | "step" | "orientation"
> & {
  name?: string;
  type: BlockType.SLIDER;
  defaultValue?: number;
  value?: number;
  onChange?: (value: number) => void;
};

export function SliderField({
  type,
  defaultValue,
  value,
  onChange,
  max = 100,
  min = 0,
  step = 1,
  orientation,
  ...props
}: SliderProps) {
  return (
    <RaftySlider
      {...props}
      min={min}
      max={max}
      step={step}
      defaultValue={defaultValue ? [defaultValue] : undefined}
      value={value ? [value] : undefined}
      onValueChange={(value) => onChange?.(value[0])}
      className="mb-8 mt-5"
    >
      <SliderTrack>
        <SliderRange />
      </SliderTrack>
      <SliderThumb />
    </RaftySlider>
  );
}
