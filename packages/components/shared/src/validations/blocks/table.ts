import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";

const columnsSchema = z.object({
  type: z.literal("column"),
  label: scriptOrLiteral(z.string()),
  isEditable: scriptOrLiteral(z.boolean()).optional(),
  hidden: scriptOrLiteral(z.boolean()).optional(),
});

export const tableSchema = z.object({
  type: z.literal(BlockType.TABLE),
  columns: z.record(z.string(), columnsSchema),
  actions: z.record(z.string(), scriptOrLiteral(z.string())),
  data: z.object({
    type: z.literal("raw"),
    rows: z.union([
      z.record(z.string(), z.array(z.any())),
      z.object({ type: z.literal("query"), value: z.array(z.any()) }),
    ]),
  }),
  enableSelection: scriptOrLiteral(z.boolean()).optional(),
  enablePagination: scriptOrLiteral(z.boolean()).optional(),
});
