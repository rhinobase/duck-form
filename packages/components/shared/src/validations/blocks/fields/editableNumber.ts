import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

export const schema = z.object({
  type: z.literal(BlockType.EDITABLE_NUMBER),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  placeholder: scriptOrLiteral(z.coerce.string()).optional(),
  defaultValue: scriptOrLiteral(z.coerce.number()).optional(),
  value: scriptOrLiteral(z.coerce.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const editableNumberSchema = fieldWrapperSchema.merge(schema);
