import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PASSWORD),
  name: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.string()).optional(),
  prefix: scriptOrLiteral(z.string()).optional(),
  suffix: scriptOrLiteral(z.string()).optional(),
  prefixIcon: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const passwordSchema = fieldWrapperSchema.merge(schema);
