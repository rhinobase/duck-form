import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.NUMBER),
  name: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  inputMode: scriptOrLiteral(z.enum(["none", "numeric", "decimal"])).optional(),
  min: scriptOrLiteral(z.number()).optional(),
  max: scriptOrLiteral(z.number()).optional(),
  defaultValue: scriptOrLiteral(z.number()).optional(),
  step: scriptOrLiteral(z.union([z.number(), z.literal("any")])).optional(),
  prefix: scriptOrLiteral(z.string()).optional(),
  suffix: scriptOrLiteral(z.string()).optional(),
  prefixIcon: scriptOrLiteral(z.string()).optional(),
  suffixIcon: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const numberSchema = fieldWrapperSchema.merge(schema);
