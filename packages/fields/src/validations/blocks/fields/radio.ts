import z from "zod";
import { BlockType } from "../../../constants";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RADIO),
  name: z.string().optional(),
  options: z.array(
    z.object({
      value: z.union([z.string(), z.number()]),
      label: z.any().optional(),
      description: z.string().optional(),
    })
  ),
  orientation: z.enum(["horizontal", "vertical"]).optional(),
  defaultValue: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const radioGroupSchema = fieldWrapperSchema.merge(schema);
