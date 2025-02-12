import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type SpanSchemaType = {
  type: BlockType.SPAN;
  className?:
    | { type: "literal"; value: string }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const spanSchema: z.ZodType<SpanSchemaType> = z.object({
  type: z.literal(BlockType.SPAN),
  className: scriptOrLiteral(z.coerce.string()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
