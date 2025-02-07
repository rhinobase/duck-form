import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  name: scriptOrLiteral(z.string()).optional(),
  type: z.literal(BlockType.STRING),
  inputType: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  inputMode: scriptOrLiteral(
    z.enum([
      "search",
      "email",
      "tel",
      "text",
      "url",
      "none",
      "numeric",
      "decimal",
    ])
  ).optional(),
  maxLength: scriptOrLiteral(z.number()).optional(),
  minLength: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.string()).optional(),
  prefix: scriptOrLiteral(z.string()).optional(),
  suffix: scriptOrLiteral(z.string()).optional(),
  perfixIcon: scriptOrLiteral(z.string()).optional(),
  suffixIcon: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.string()).optional(),
  onChange: z
    .function()
    .args(z.string().optional())
    .returns(z.void())
    .optional(),
});

export const stringSchema = fieldWrapperSchema.merge(schema);
