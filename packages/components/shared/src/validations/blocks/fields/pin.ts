import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PIN),
  name: z.string().optional(),
  length: z.number(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.array(z.string()).optional())
    .returns(z.void())
    .optional(),
});

export const pinSchema = fieldWrapperSchema.merge(schema);
