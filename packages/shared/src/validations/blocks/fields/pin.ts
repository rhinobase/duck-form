import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PIN),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  length: scriptOrLiteral(z.coerce.number()),
  placeholder: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.array(z.string()).optional()).returns(z.void())
  ).optional(),
});

export const pinSchema = fieldWrapperSchema.merge(schema);
