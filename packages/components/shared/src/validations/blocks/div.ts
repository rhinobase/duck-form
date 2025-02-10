import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type DivSchemaType = {
  type: BlockType.DIV;
  className?:
    | { type: "literal"; value: string }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const divSchema: z.ZodType<DivSchemaType> = z.object({
  type: z.literal(BlockType.DIV),
  className: scriptOrLiteral(z.string()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
