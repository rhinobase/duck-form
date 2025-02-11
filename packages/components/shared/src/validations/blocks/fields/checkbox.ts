import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.BOOLEAN}'`,
  name: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("boolean").optional(),
  value: scriptOrLiteral("boolean").optional(),
  onChange: scriptOrLiteral("(boolean) => void").optional(),
});

export const checkboxSchema = fieldWrapperSchema.and(schema);
