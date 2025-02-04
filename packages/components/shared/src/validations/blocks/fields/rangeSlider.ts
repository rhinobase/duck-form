import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RANGE_SLIDER),
  name: z.string().optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  defaultValue: z.tuple([z.number(), z.number()]).optional(),
  value: z.tuple([z.number(), z.number()]).optional(),
  onChange: z
    .function()
    .args(z.tuple([z.number(), z.number()]).optional())
    .returns(z.void())
    .optional(),
});

export const rangeSliderSchema = fieldWrapperSchema.merge(schema);
