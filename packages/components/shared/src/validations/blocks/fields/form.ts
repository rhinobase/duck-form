import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";

export const formSchema = z.object({
  type: z.literal(BlockType.FORM),
  title: scriptOrLiteral(z.string()).optional(),
  enableDevtool: scriptOrLiteral(z.boolean()).optional(),
  onSubmit: scriptOrLiteral(
    z.function().args(z.any(), z.any()).returns(z.void())
  ).optional(),
  onError: scriptOrLiteral(
    z.function().args(z.any(), z.any()).returns(z.void())
  ).optional(),
  className: scriptOrLiteral(z.string()).optional(),
  blocks: z.record(z.string(), z.any()),
  defaultValue: scriptOrLiteral(z.record(z.string(), z.any())).optional(),
  validation: scriptOrLiteral(z.record(z.string(), z.any())).optional(),
});
