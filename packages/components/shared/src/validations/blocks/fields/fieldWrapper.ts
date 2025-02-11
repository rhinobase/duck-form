import { type } from "arktype";
import { ORIENTATION, scriptOrLiteral } from "../../../utils";

export const fieldWrapperSchema = type({
  label: scriptOrLiteral("string").optional(),
  description: scriptOrLiteral("string").optional(),
  primary: scriptOrLiteral("boolean").optional(),
  unique: scriptOrLiteral("boolean").optional(),
  required: scriptOrLiteral("boolean").optional(),
  disabled: scriptOrLiteral("boolean").optional(),
  readonly: scriptOrLiteral("boolean").optional(),
  hidden: scriptOrLiteral("boolean").optional(),
  orientation: scriptOrLiteral(
    `'${Object.values(ORIENTATION).join("' | '")}'`
  ).optional(),
  onChange: scriptOrLiteral("() => void").optional(),
  tooltip: scriptOrLiteral("string<=2000").optional(),
  fieldset: scriptOrLiteral("string<=2000").optional(),
});
