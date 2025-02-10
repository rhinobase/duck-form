import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.CHECKBOX_GROUP),
  name: scriptOrLiteral(z.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.union([z.string(), z.number()]),
        label: z.string().optional(),
      })
    )
  ),
  defaultValue: scriptOrLiteral(
    z.array(z.union([z.string(), z.number()]))
  ).optional(),
  value: scriptOrLiteral(z.array(z.union([z.string(), z.number()]))).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.array(z.union([z.string(), z.number()])).optional())
  ).optional(),
});

export const checkboxGroupSchema = fieldWrapperSchema.merge(schema);
