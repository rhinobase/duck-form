import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RANGE_SLIDER),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  min: scriptOrLiteral(z.coerce.number()).optional(),
  max: scriptOrLiteral(z.coerce.number()).optional(),
  step: scriptOrLiteral(z.coerce.number()).optional(),
  defaultValue: scriptOrLiteral(
    z.tuple([z.coerce.number(), z.coerce.number()])
  ).optional(),
  value: scriptOrLiteral(
    z.tuple([z.coerce.number(), z.coerce.number()])
  ).optional(),
  onChange: scriptOrLiteral(
    z
      .function()
      .args(z.tuple([z.number(), z.number()]).optional())
      .returns(z.void())
  ).optional(),
});

export const rangeSliderSchema = fieldWrapperSchema.merge(schema);
