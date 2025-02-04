import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.CHECKBOX_GROUP),
  name: z.string().optional(),
  options: z.array(
    z.object({
      value: z.union([z.string(), z.number()]),
      label: z.string().optional(),
    }),
  ),
  defaultValue: z.array(z.union([z.string(), z.number()])).optional(),
  value: z.array(z.union([z.string(), z.number()])).optional(),
  onChange: z
    .function()
    .args(z.array(z.union([z.string(), z.number()])).optional())
    .optional(),
});

export const checkboxGroupSchema = fieldWrapperSchema.merge(schema);
