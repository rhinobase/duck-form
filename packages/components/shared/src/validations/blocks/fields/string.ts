import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: z.string().optional(),
  type: z.literal(BlockType.STRING),
  inputType: z.string().optional(),
  placeholder: z.string().optional(),
  inputMode: z
    .enum([
      "search",
      "email",
      "tel",
      "text",
      "url",
      "none",
      "numeric",
      "decimal",
    ])
    .optional(),
  maxLength: z.number().optional(),
  minLength: z.number().optional(),
  defaultValue: z.string().optional(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  perfixIcon: z.string().optional(),
  suffixIcon: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const stringSchema = fieldWrapperSchema.merge(schema);
