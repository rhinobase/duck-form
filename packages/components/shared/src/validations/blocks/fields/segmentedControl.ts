import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.SEGMENTED_CONTROL),
  name: scriptOrLiteral(z.string()).optional(),
  options: scriptOrLiteral(
    z.array(
      z.object({
        value: z.string(),
        label: z.string().optional(),
      })
    )
  ),
  defaultValue: scriptOrLiteral(z.string()).optional(),
  value: scriptOrLiteral(z.string()).optional(),
  onChange: scriptOrLiteral(
    z.function().args(z.string().optional()).returns(z.void())
  ).optional(),
});

export const segmentedControlSchema = fieldWrapperSchema.merge(schema);
