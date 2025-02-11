import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RATING),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  count: scriptOrLiteral(z.coerce.number()).optional(),
  allowHalf: scriptOrLiteral(z.coerce.boolean()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.number()).optional(),
  value: scriptOrLiteral(z.coerce.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const ratingSchema = fieldWrapperSchema.merge(schema);
