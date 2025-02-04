import { Rating as RaftyRating } from "@rafty/ui";
import type { ratingSchema } from "@rhinobase/shared";
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
  return (
    <RaftyRating
      id={name}
      count={count}
      allowHalf={allowHalf}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onChange}
    />
  );
}
