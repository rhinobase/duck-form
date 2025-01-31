import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.MULTI_LISTBOX),
  name: z.string().optional(),
  options: z.array(
    z.object({
      value: z.string(),
      label: z.string().optional(),
    })
  ),
  defaultValue: z.array(z.string()).optional(),
  value: z.array(z.string()).optional(),
  onChange: z
    .function()
    .args(z.array(z.string()).optional())
    .returns(z.void())
    .optional(),
});

export const multiListboxSchema = fieldWrapperSchema.merge(schema);
