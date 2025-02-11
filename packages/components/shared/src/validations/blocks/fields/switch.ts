import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.SWTICH}'`,
  name: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("boolean").optional(),
  value: scriptOrLiteral("boolean").optional(),
  onChange: scriptOrLiteral("(boolean?) => void").optional(),
});

export const switchSchema = fieldWrapperSchema.merge(schema);
