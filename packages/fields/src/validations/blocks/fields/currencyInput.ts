import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.CURRENCY_INPUT),
  defaultValue: z.string().optional(),
  currencyCode: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const currencyInputSchema = fieldWrapperSchema.merge(schema);
