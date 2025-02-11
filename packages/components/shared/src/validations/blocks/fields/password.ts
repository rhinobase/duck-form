import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.PASSWORD}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  prefix: scriptOrLiteral("string").optional(),
  suffix: scriptOrLiteral("string").optional(),
  prefixIcon: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("((string?) => void)").optional(),
});

export const passwordSchema = fieldWrapperSchema.merge(schema);
