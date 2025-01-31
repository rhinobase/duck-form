import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.TAG),
  defaultValue: z.array(z.string()).optional(),
  value: z.array(z.string()).optional(),
  onChange: z
    .function()
    .args(z.array(z.string()).optional())
    .returns(z.void())
    .optional(),
});

export const tagSchema = fieldWrapperSchema.merge(schema);
