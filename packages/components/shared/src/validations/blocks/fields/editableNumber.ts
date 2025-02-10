import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

export const schema = z.object({
  type: z.literal(BlockType.EDITABLE_NUMBER),
  name: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.number()).optional(),
  value: scriptOrLiteral(z.number()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.number().optional()).returns(z.void())
  ).optional(),
});

export const editableNumberSchema = fieldWrapperSchema.merge(schema);
