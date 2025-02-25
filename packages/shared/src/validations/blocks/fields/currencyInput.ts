import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.CURRENCY_INPUT),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  currencyCode: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const currencyInputSchema = fieldWrapperSchema.merge(schema);
