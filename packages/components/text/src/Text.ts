import type { textSchema } from "@rhinobase/shared";
import type z from "zod";

export type TextProps = z.infer<typeof textSchema>;

export function TextField({ content }: TextProps) {
  return content;
}
