import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui/slider";
import { type rangeSliderSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type RangeSliderProps = z.infer<typeof rangeSliderSchema>;

export function RangeSliderField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const {
    onChange,
    defaultValue = { type: "literal", value: [0, 0] },
    max,
    min,
    name,
    step,
    value,
  } = useField<RangeSliderProps>();

  const props = {
    name,
    value,
    min,
    max,
    defaultValue,
    onChange,
    step,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <RaftySlider
      {...fieldProps}
      name={componentId}
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
