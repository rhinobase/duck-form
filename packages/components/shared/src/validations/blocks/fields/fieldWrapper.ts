import z from "zod";
import { ORIENTATION } from "../../../utils";

export const fieldWrapperSchema = z.object({
  label: z.string().optional(),
  description: z.string().optional(),
  primary: z.boolean().optional(),
  unique: z.boolean().optional(),
  required: z.boolean().optional(),
  disabled: z.boolean().optional(),
  readonly: z.boolean().optional(),
  hidden: z.boolean().optional(),
  orientation: z.nativeEnum(ORIENTATION).optional(),
  onChange: z.function().returns(z.void()).optional(),
  tooltip: z.string().max(2000).optional(),
  fieldset: z.string().max(2000).optional(),
});
