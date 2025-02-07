import z from "zod";
import { ORIENTATION, scriptOrLiteral } from "../../../utils";

export const fieldWrapperSchema = z.object({
  label: scriptOrLiteral(z.string()).optional(),
  description: scriptOrLiteral(z.string()).optional(),
  primary: scriptOrLiteral(z.boolean()).optional(),
  unique: scriptOrLiteral(z.boolean()).optional(),
  required: scriptOrLiteral(z.boolean()).optional(),
  disabled: scriptOrLiteral(z.boolean()).optional(),
  readonly: scriptOrLiteral(z.boolean()).optional(),
  hidden: scriptOrLiteral(z.boolean()).optional(),
  orientation: scriptOrLiteral(z.nativeEnum(ORIENTATION)).optional(),
  onChange: z.function().returns(z.void()).optional(),
  tooltip: scriptOrLiteral(z.string().max(2000)).optional(),
  fieldset: scriptOrLiteral(z.string().max(2000)).optional(),
});
