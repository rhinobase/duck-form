import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PASSWORD),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  placeholder: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  prefix: scriptOrLiteral(z.coerce.string()).optional(),
  suffix: scriptOrLiteral(z.coerce.string()).optional(),
  prefixIcon: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const passwordSchema = fieldWrapperSchema.merge(schema);
