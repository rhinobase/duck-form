import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.RATING}'`,
  name: scriptOrLiteral("string").optional(),
  count: scriptOrLiteral("number").optional(),
  allowHalf: scriptOrLiteral("boolean").optional(),
  defaultValue: scriptOrLiteral("number").optional(),
  value: scriptOrLiteral("number").optional(),
  onChange: scriptOrLiteral("(number?) => void").optional(),
});

export const ratingSchema = fieldWrapperSchema.and(schema);
