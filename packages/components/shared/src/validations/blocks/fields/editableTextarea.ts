import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.EDITABLE_TEXTAREA),
  name: scriptOrLiteral(z.string()).optional(),
  placeholder: scriptOrLiteral(z.string()).optional(),
  defaultValue: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const editableTextareaSchema = fieldWrapperSchema.merge(schema);
