import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.CURRENCY_INPUT}'`,
  name: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  currencyCode: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("(string?) => void").optional(),
});

export const currencyInputSchema = fieldWrapperSchema.and(schema);
