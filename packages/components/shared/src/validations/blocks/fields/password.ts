import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PASSWORD),
  name: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  prefixIcon: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const passwordSchema = fieldWrapperSchema.merge(schema);
