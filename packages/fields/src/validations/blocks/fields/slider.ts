import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.SLIDER),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  defaultValue: z.number().optional(),
  value: z.number().optional(),
  onChange: z.function().args(z.number()).returns(z.void()).optional(),
});

export const sliderSchema = fieldWrapperSchema.merge(schema);
