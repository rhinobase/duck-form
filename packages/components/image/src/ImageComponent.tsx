import { evalProp, type imageSchema } from "@rhinobase/shared";
import Image from "next/image";
import React from "react";
import type z from "zod";

export type ImageComponentProps = z.infer<typeof imageSchema>;

export function ImageComponent(props: ImageComponentProps) {
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

  // @ts-expect-error
  return <Image {...fieldProps} />;
}
