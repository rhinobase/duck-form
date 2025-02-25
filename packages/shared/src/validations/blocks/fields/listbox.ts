import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.LISTBOX),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.string(),
        label: z.string().optional(),
      })
    )
  ),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const listboxSchema = fieldWrapperSchema.merge(schema);
