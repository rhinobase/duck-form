import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.DATE_RANGE),
  name: z.string().optional(),
  placeholder: z
    .object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
    .optional(),
  defaultValue: z
    .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
    .optional(),
  value: z
    .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
    .optional(),
  onChange: z
    .function()
    .args(
      z
        .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
        .optional()
    )
    .returns(z.void())
    .optional(),
});

export const dateRangeSchema = fieldWrapperSchema.merge(schema);
