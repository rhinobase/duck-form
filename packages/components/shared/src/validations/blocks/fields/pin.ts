import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.PIN}'`,
  name: scriptOrLiteral("string").optional(),
  length: scriptOrLiteral("number"),
  placeholder: scriptOrLiteral("string").optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("([value?]) => void").optional(),
});

export const pinSchema = fieldWrapperSchema.and(schema);
