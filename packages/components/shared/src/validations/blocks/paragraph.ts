import z from "zod";
import { BlockType } from "../../utils";
// import { duckSpecSchema } from "../schema";

type ParagraphSchemaType = {
  type: BlockType.PARAGRAPH;
  className?: string;
  blocks?: Record<string, unknown>;
};

export const paragraphSchema: z.ZodType<ParagraphSchemaType> = z.object({
  type: z.literal(BlockType.PARAGRAPH),
  className: z.string().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
