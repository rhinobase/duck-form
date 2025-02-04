import z from "zod";
import { BlockType } from "../../utils";

export const textSchema = z.object({
  type: z.literal(BlockType.TEXT),
  content: z.string(),
});
