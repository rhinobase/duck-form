import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.CALENDAR),
  name: z.string().optional(),
  placeholder: z.string().optional(),
  defaultValue: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const calendarSchema = fieldWrapperSchema.merge(schema);
