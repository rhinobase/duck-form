import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.RADIO),
  name: scriptOrLiteral(z.coerce.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.union([z.string(), z.number()]),
        label: z.any().optional(),
        description: z.coerce.string().optional(),
      })
    )
  ),
  orientation: scriptOrLiteral(z.enum(["horizontal", "vertical"])).optional(),
  defaultValue: scriptOrLiteral(z.coerce.string()).optional(),
  value: scriptOrLiteral(z.coerce.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const radioGroupSchema = fieldWrapperSchema.merge(schema);
