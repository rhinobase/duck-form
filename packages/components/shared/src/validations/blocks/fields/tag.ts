import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.TAG),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.array(z.string())).optional(),
  value: scriptOrLiteral(z.array(z.string())).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.array(z.string()).optional()).returns(z.void())
  ).optional(),
});

export const tagSchema = fieldWrapperSchema.merge(schema);
