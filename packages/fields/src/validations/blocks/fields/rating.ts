import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.RATING),
  count: z.number(),
  allowHalf: z.boolean().optional(),
  defaultValue: z.number().optional(),
  value: z.number().optional(),
  onChange: z
    .function()
    .args(z.number().optional())
    .returns(z.void())
    .optional(),
});

export const ratingSchema = fieldWrapperSchema.merge(schema);
