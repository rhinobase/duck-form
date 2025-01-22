import { BlockType } from "packages/fields/src/constants";
import z from "zod";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SELECT),
  name: z.string().optional(),
  placeholder: z.string().optional(),
  options: z.array(
    z.object({
      value: z.union([z.string(), z.number()]),
      label: z.string().optional(),
    })
  ),
  defaultValue: z.union([z.string(), z.number()]).optional(),
  value: z.union([z.string(), z.number()]).optional(),
  onChange: z
    .function()
    .args(z.union([z.string(), z.number()]).optional())
    .returns(z.void())
    .optional(),
});

export const selectSchema = fieldWrapperSchema.merge(schema);
