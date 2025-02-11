import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import { evalProp, type sliderSchema } from "@rhinobase/shared";
import React from "react";

export type SliderProps = typeof sliderSchema.infer;

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
      name={fieldProps.name}
      min={fieldProps.min}
      max={fieldProps.max}
      step={fieldProps.step}
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
