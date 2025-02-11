import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.MULTI_LISTBOX}'`,
  name: scriptOrLiteral("string").optional(),
  options: scriptOrLiteral(
    type({ value: "string", "label?": "string" }).array()
  ),
  defaultValue: scriptOrLiteral(type("string").array()).optional(),
  value: scriptOrLiteral(type("string").array()).optional(),
  onChange: scriptOrLiteral("((array<string>?) => void)").optional(),
});

export const multiListboxSchema = fieldWrapperSchema.merge(schema);
