import z from "zod";
import { BlockType } from "../../constants";

export const textSchema = z.object({
  type: z.literal(BlockType.TEXT),
  content: z.string(),
  className: z.string().optional(),
});
