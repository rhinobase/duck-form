import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";

export const textSchema = z.object({
  type: z.literal(BlockType.TEXT),
  content: scriptOrLiteral(z.string()),
});
