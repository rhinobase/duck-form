import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SLIDER),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  min: scriptOrLiteral(z.coerce.number()).optional(),
  max: scriptOrLiteral(z.coerce.number()).optional(),
  step: scriptOrLiteral(z.coerce.number()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.number()).optional(),
  value: scriptOrLiteral(z.coerce.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number()).returns(z.void())
  ).optional(),
});

export const sliderSchema = fieldWrapperSchema.merge(schema);
