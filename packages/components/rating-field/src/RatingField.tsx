import { Rating as RaftyRating } from "@rafty/ui";
import { evalProp, type ratingSchema } from "@rhinobase/shared";
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
    <RaftyRating
      id={fieldProps.name}
      count={fieldProps.count}
      allowHalf={fieldProps.allowHalf}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      onValueChange={fieldProps.onChange}
    />
  );
}
