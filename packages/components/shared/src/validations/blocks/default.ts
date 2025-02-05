import z from "zod";
import { duckSpecSchema } from "../schema";

type DefaultSchemaType = {
  type: string;
  className?: string;
  blocks?: Record<string, z.infer<typeof duckSpecSchema>>;
} & Record<string, unknown>;

export const defaultSchema: z.ZodType<DefaultSchemaType> = z
  .object({
    type: z.string(),
    className: z.string().optional(),
    blocks: z
      .record(
        z.string(),
        z.lazy(() => duckSpecSchema)
      )
      .optional(),
  })
  .passthrough();
