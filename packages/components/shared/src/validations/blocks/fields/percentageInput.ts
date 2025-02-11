import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.PERCENTAGE_INPUT}'`,
  name: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("(value?: string) => void").optional(),
});

export const percentageInputSchema = fieldWrapperSchema.merge(schema);
