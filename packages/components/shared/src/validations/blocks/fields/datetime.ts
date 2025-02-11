import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.DATE_TIME}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("((string?) => void)").optional(),
});

export const datetimeSchema = fieldWrapperSchema.and(schema);
