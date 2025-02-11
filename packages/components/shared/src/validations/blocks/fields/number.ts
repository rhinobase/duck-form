import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.NUMBER}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  inputMode: scriptOrLiteral(`"none" | "numeric" | "decimal"`).optional(),
  min: scriptOrLiteral("number").optional(),
  max: scriptOrLiteral("number").optional(),
  defaultValue: scriptOrLiteral("number").optional(),
  step: scriptOrLiteral("number | 'any'").optional(),
  prefix: scriptOrLiteral("string").optional(),
  suffix: scriptOrLiteral("string").optional(),
  prefixIcon: scriptOrLiteral("string").optional(),
  suffixIcon: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("number").optional(),
  onChange: scriptOrLiteral("((number?) => void)").optional(),
});

export const numberSchema = fieldWrapperSchema.merge(schema);
