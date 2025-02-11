import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.EDITABLE_TEXT}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("((string?) => void)").optional(),
});

export const editableTextSchema = fieldWrapperSchema.and(schema);
