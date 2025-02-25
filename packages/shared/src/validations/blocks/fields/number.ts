import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.NUMBER),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  placeholder: scriptOrLiteral(z.coerce.string()).optional(),
  inputMode: scriptOrLiteral(z.enum(["none", "numeric", "decimal"])).optional(),
  min: scriptOrLiteral(z.coerce.number()).optional(),
  max: scriptOrLiteral(z.coerce.number()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.number()).optional(),
  step: scriptOrLiteral(
    z.union([z.coerce.number(), z.literal("any")])
  ).optional(),
  prefix: scriptOrLiteral(z.coerce.string()).optional(),
  suffix: scriptOrLiteral(z.coerce.string()).optional(),
  prefixIcon: scriptOrLiteral(z.coerce.string()).optional(),
  suffixIcon: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const numberSchema = fieldWrapperSchema.merge(schema);
