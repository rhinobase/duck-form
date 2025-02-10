import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.MULTI_LISTBOX),
  name: scriptOrLiteral(z.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.string(),
        label: z.string().optional(),
      })
    )
  ),
  defaultValue: scriptOrLiteral(z.array(z.string())).optional(),
  value: scriptOrLiteral(z.array(z.string())).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.array(z.string()).optional()).returns(z.void())
  ).optional(),
});

export const multiListboxSchema = fieldWrapperSchema.merge(schema);
