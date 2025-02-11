import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.SWITCH_GROUP}'`,
  name: scriptOrLiteral("string").optional(),
  options: scriptOrLiteral(
    type({
      value: "string|number",
      label: "string?",
    }).array()
  ),
  defaultValue: scriptOrLiteral(type("string|number").array()).optional(),
  value: scriptOrLiteral(type("string|number").array()).optional(),
  onChange: scriptOrLiteral("(string|number[]?) => void").optional(),
});

export const switchGroupSchema = fieldWrapperSchema.merge(schema);
