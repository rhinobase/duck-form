import { Rating as RaftyRating } from "@rafty/ui/rating";
import { type ratingSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type RatingProps = z.infer<typeof ratingSchema>;

export function RatingField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { onChange, count, allowHalf, defaultValue, name, value } =
    useField<RatingProps>();

  const props = {
    name,
    defaultValue,
    count,
    value,
    allowHalf,
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
    <RaftyRating
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
