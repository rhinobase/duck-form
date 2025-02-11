import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import { evalProp, type rangeSliderSchema } from "@rhinobase/shared";
import React from "react";

export type RangeSliderProps = typeof rangeSliderSchema.infer;

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
    <RaftySlider
      id={fieldProps.name}
      max={fieldProps.max}
      min={fieldProps.min}
      name={fieldProps.name}
      step={fieldProps.step}
      value={fieldProps.value}
      defaultValue={fieldProps.defaultValue}
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
