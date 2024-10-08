"use client";
import { Rating as RaftyRating } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type RatingProps = {
  type: "rating";
  count: number;
  defaultValue?: number;
  allowHalf?: boolean;
};

export function RatingField() {
  const props = useField<RatingProps>();
  const { control } = useFormContext();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { name, onChange, ...field } }) => (
        <RaftyRating
          {...field}
          id={name}
          name={name}
          count={props.count}
          allowHalf={props.allowHalf}
          onValueChange={onChange}
        />
      )}
    />
  );
}
