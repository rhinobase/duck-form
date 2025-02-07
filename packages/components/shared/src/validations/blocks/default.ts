import z from "zod";
// import { duckSpecSchema } from "../schema";

type DefaultSchemaType = {
  type: string;
  className?: string;
  blocks?: Record<string, unknown>;
} & Record<string, unknown>;

export const defaultSchema: z.ZodType<DefaultSchemaType> = z
  .object({
    type: z.string(),
    className: z.string().optional(),
    blocks: z
      .record(
        z.string(),
        z.lazy(() => z.any())
      )
      .optional(),
  })
  .passthrough();
