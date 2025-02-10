import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SLIDER),
  name: scriptOrLiteral(z.string()).optional(),
  min: scriptOrLiteral(z.number()).optional(),
  max: scriptOrLiteral(z.number()).optional(),
  step: scriptOrLiteral(z.number()).optional(),
  defaultValue: scriptOrLiteral(z.number()).optional(),
  value: scriptOrLiteral(z.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number()).returns(z.void())
  ).optional(),
});

export const sliderSchema = fieldWrapperSchema.merge(schema);
