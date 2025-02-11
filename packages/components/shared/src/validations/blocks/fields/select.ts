import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.SELECT}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral("string").optional(),
  options: scriptOrLiteral(
    type({
      value: "string | number",
      label: "string?",
    }).array()
  ),
  defaultValue: scriptOrLiteral("string | number").optional(),
  value: scriptOrLiteral("string | number").optional(),
  onChange: scriptOrLiteral("(string | number?)=>void").optional(),
});

export const selectSchema = fieldWrapperSchema.merge(schema);
