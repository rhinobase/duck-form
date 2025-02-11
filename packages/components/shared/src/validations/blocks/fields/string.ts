import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.STRING),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  inputType: scriptOrLiteral(z.coerce.string()).optional(),
  placeholder: scriptOrLiteral(z.coerce.string()).optional(),
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
  maxLength: scriptOrLiteral(z.coerce.number()).optional(),
  minLength: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  prefix: scriptOrLiteral(z.coerce.string()).optional(),
  suffix: scriptOrLiteral(z.coerce.string()).optional(),
  perfixIcon: scriptOrLiteral(z.coerce.string()).optional(),
  suffixIcon: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const stringSchema = fieldWrapperSchema.merge(schema);
