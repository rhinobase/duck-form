import z from "zod";
import { BlockType } from "../../constants";
import { duckSpecSchema } from "../schema";

type SpanSchemaType = {
  type: BlockType.SPAN;
  className?: string;
  blocks?: Record<string, z.infer<typeof duckSpecSchema>>;
};

export const spanSchema: z.ZodType<SpanSchemaType> = z.object({
  type: z.literal(BlockType.SPAN),
  className: z.string().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => duckSpecSchema)
    )
    .optional(),
});
