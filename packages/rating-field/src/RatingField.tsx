import { Rating as RaftyRating } from "@rafty/ui";
import { type ratingSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type RatingProps = z.infer<typeof ratingSchema>;

export function RatingField({
  onChange,
  count,
  allowHalf,
  defaultValue,
  name,
  value,
}: RatingProps) {
  const props = {
    name,
    defaultValue,
    count,
    value,
    allowHalf,
    onChange,
  };

  const fieldProps = useEvaluate(props);

  return (
    <RaftyRating
      {...fieldProps}
      id={fieldProps.name}
      onValueChange={fieldProps.onChange}
    />
  );
}
