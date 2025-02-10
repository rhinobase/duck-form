import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.PIN),
  name: scriptOrLiteral(z.string()).optional(),
  length: scriptOrLiteral(z.number()),
  placeholder: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.array(z.string()).optional()).returns(z.void())
  ).optional(),
});

export const pinSchema = fieldWrapperSchema.merge(schema);
