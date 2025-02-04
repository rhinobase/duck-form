import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.NUMBER),
  name: z.string().optional(),
  placeholder: z.string().optional(),
  inputMode: z.enum(["none", "numeric", "decimal"]).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
  defaultValue: z.number().optional(),
  step: z.union([z.number(), z.literal("any")]).optional(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  prefixIcon: z.string().optional(),
  suffixIcon: z.string().optional(),
  value: z.number().optional(),
  onChange: z
    .function()
    .args(z.number().optional())
    .returns(z.void())
    .optional(),
});

export const numberSchema = fieldWrapperSchema.merge(schema);
