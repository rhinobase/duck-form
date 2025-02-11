import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.LISTBOX}'`,
  name: scriptOrLiteral("string").optional(),
  options: scriptOrLiteral(
    type({ value: "string", "label?": "string" }).array()
  ),
  defaultValue: scriptOrLiteral("string").optional(),
  value: scriptOrLiteral("string").optional(),
  onChange: scriptOrLiteral("((string?) => void)").optional(),
});

export const listboxSchema = fieldWrapperSchema.merge(schema);
