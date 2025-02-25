import z from "zod";
import { ORIENTATION, scriptOrLiteral } from "../../../utils";

export const fieldWrapperSchema = z.object({
  label: scriptOrLiteral(z.coerce.string()).optional(),
  description: scriptOrLiteral(z.coerce.string()).optional(),
  primary: scriptOrLiteral(z.coerce.boolean()).optional(),
  unique: scriptOrLiteral(z.coerce.boolean()).optional(),
  required: scriptOrLiteral(z.coerce.boolean()).optional(),
  disabled: scriptOrLiteral(z.coerce.boolean()).optional(),
  readonly: scriptOrLiteral(z.coerce.boolean()).optional(),
  hidden: scriptOrLiteral(z.coerce.boolean()).optional(),
  orientation: scriptOrLiteral(z.nativeEnum(ORIENTATION)).optional(),
  onChange: scriptOrLiteral(z.function().returns(z.void())).optional(),
  tooltip: scriptOrLiteral(z.coerce.string().max(2000)).optional(),
  fieldset: scriptOrLiteral(z.coerce.string().max(2000)).optional(),
});
