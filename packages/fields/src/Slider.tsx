"use client";
import {
  Slider as RaftySlider,
  type Slider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type SliderProps = Pick<Slider, "min" | "max" | "step"> & {
  type: "slider";
  defaultValue?: number;
};

export function SliderField() {
  const props = useField<SliderProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  const { max = 100, min = 0, step = 1 } = props;

  const sliderProps = {
    min,
    max,
    step,
  };

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { onChange, value, ...field } }) => (
        <RaftySlider
          {...sliderProps}
          {...field}
          value={[value]}
          onValueChange={(value) => onChange(value[0])}
          className="mb-8 mt-5"
        >
          <SliderTrack>
            <SliderRange />
          </SliderTrack>
          <SliderThumb />
        </RaftySlider>
      )}
    />
  );
}
