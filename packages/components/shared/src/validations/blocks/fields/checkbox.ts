import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.BOOLEAN),
  name: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.boolean()).optional(),
  value: scriptOrLiteral(z.boolean()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.boolean()).returns(z.void())
  ).optional(),
});

export const checkboxSchema = fieldWrapperSchema.merge(schema);
