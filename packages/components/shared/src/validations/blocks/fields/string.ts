import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.STRING}'`,
  name: scriptOrLiteral("string").optional(),
  inputType: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  inputMode: scriptOrLiteral(
    '"search" | "email" | "tel" | "text" | "url" | "none" | "numeric" | "decimal"'
  ).optional(),
  maxLength: scriptOrLiteral("number").optional(),
  minLength: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  prefix: scriptOrLiteral("string").optional(),
  suffix: scriptOrLiteral("string").optional(),
  perfixIcon: scriptOrLiteral("string").optional(),
  suffixIcon: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("(string?) => void").optional(),
});

export const stringSchema = fieldWrapperSchema.merge(schema);
