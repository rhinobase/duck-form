import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type ParagraphSchemaType = {
  type: BlockType.PARAGRAPH;
  className?:
    | { type: "literal"; value: unknown }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const paragraphSchema: z.ZodType<ParagraphSchemaType> = z.object({
  type: z.literal(BlockType.PARAGRAPH),
  className: scriptOrLiteral(z.string()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
