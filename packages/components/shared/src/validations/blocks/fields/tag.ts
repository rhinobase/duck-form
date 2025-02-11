import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.TAG}'`,
  name: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral(type("string").array()).optional(),
  value: scriptOrLiteral(type("string").array()).optional(),
  onChange: scriptOrLiteral("(string[]?) => void").optional(),
});

export const tagSchema = fieldWrapperSchema.merge(schema);
