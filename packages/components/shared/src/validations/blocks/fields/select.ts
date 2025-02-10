import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SELECT),
  name: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.union([z.string(), z.number()]),
        label: z.string().optional(),
      })
    )
  ),
  defaultValue: scriptOrLiteral(z.union([z.string(), z.number()])).optional(),
  value: scriptOrLiteral(z.union([z.string(), z.number()])).optional(),
  onChange: scriptOrLiteral(
    z
      .function()
      .args(z.union([z.string(), z.number()]).optional())
      .returns(z.void())
  ).optional(),
});

export const selectSchema = fieldWrapperSchema.merge(schema);
