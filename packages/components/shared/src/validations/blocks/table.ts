import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";

export const tableSchema = z.object({
  type: z.literal(BlockType.TABLE),
  columns: scriptOrLiteral(z.array(z.string())),
  data: scriptOrLiteral(z.array(z.record(z.string()))),
  className: scriptOrLiteral(z.string()).optional(),
  variant: scriptOrLiteral(z.enum(["simple", "striped"])).optional(),
  size: scriptOrLiteral(z.enum(["sm", "md", "lg"])).optional(),
});
