import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.BOOLEAN),
  name: z.string().optional(),
  defaultValue: z.boolean().optional(),
  value: z.boolean().optional(),
  onChange: z.function().args(z.boolean()).returns(z.void()).optional(),
});

export const checkboxSchema = fieldWrapperSchema.merge(schema);
