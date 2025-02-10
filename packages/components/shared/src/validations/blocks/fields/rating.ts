import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RATING),
  name: scriptOrLiteral(z.string()).optional(),
  count: scriptOrLiteral(z.number()).optional(),
  allowHalf: scriptOrLiteral(z.boolean()).optional(),
  defaultValue: scriptOrLiteral(z.number()).optional(),
  value: scriptOrLiteral(z.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const ratingSchema = fieldWrapperSchema.merge(schema);
