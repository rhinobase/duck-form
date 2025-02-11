import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type ParagraphSchemaType = {
  type: BlockType.PARAGRAPH;
  className?:
    | { type: "literal"; value: string }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const paragraphSchema: z.ZodType<ParagraphSchemaType> = z.object({
  type: z.literal(BlockType.PARAGRAPH),
  className: scriptOrLiteral(z.coerce.string()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
