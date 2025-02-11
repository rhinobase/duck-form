import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.RADIO}'`,
  name: scriptOrLiteral("string").optional(),
  options: scriptOrLiteral(
    type({
      value: "string|number",
      label: "unknown?",
      description: "string?",
    }).array()
  ),
  orientation: scriptOrLiteral('"horizontal" | "vertical"').optional(),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("(string?) => void").optional(),
});

export const radioGroupSchema = fieldWrapperSchema.and(schema);
