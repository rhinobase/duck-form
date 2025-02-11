import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.EDITABLE_NUMBER}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("number").optional(),
  value: scriptOrLiteral("number").optional(),
  onChange: scriptOrLiteral("((number?) => void)").optional(),
});

export const editableNumberSchema = fieldWrapperSchema.and(schema);
