import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

export const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.EDITABLE_NUMBER),
  placeholder: z.string().optional(),
  defaultValue: z.number().optional(),
  value: z.number().optional(),
  onChange: z
    .function()
    .args(z.number().optional())
    .returns(z.void())
    .optional(),
});

export const editableNumberSchema = fieldWrapperSchema.merge(schema);
