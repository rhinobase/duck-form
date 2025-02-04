import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SEGMENTED_CONTROL),
  name: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string().optional(),
    }),
  ),
  defaultValue: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const segmentedControlSchema = fieldWrapperSchema.merge(schema);
