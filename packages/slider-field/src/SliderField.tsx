import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui/slider";
import { type sliderSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type SliderProps = z.infer<typeof sliderSchema>;

export function SliderField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const {
    defaultValue,
    value,
    onChange,
    max = { type: "literal", value: 100 },
    min = { type: "literal", value: 0 },
    step = { type: "literal", value: 1 },
    name,
  } = useField<SliderProps>();

  const props = {
    name,
    defaultValue,
    step,
    max,
    min,
    value,
    onChange,
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
