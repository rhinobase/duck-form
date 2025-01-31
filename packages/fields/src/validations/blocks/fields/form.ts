import z from "zod";
import { BlockType } from "../../../constants";

export const formSchema = z.object({
  type: z.literal(BlockType.FORM),
  title: z.string().optional(),
  enableDevtool: z.boolean().optional(),
  onSubmit: z.function().args(z.any(), z.any()).returns(z.void()).optional(),
  onError: z.function().args(z.any(), z.any()).returns(z.void()).optional(),
  className: z.string().optional(),
  blocks: z.record(z.string(), z.any()),
  defaultValue: z.record(z.string(), z.any()),
  validation: z.record(z.string(), z.any()).optional(),
});
