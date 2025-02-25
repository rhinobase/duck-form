import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SWTICH),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.boolean()).optional(),
  value: scriptOrLiteral(z.coerce.boolean()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.boolean().optional()).returns(z.void())
  ).optional(),
});

export const switchSchema = fieldWrapperSchema.merge(schema);
