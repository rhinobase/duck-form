import { useEvaluate, type imageSchema } from "@rhinobase/shared";
import Image from "next/image";
import React from "react";
import type z from "zod";

export type ImageComponentProps = z.infer<typeof imageSchema>;

export function ImageComponent(props: ImageComponentProps) {
  const fieldProps = useEvaluate(props);

  // @ts-expect-error
  return <Image {...fieldProps} />;
}
