import z from "zod";
import { scriptOrLiteral } from "../../utils";

export const imageSchema = z.object({
  src: scriptOrLiteral(z.coerce.string()),
  alt: scriptOrLiteral(z.coerce.string()),
  width: scriptOrLiteral(z.coerce.number()).optional(),
  height: scriptOrLiteral(z.coerce.number()).optional(),
  className: scriptOrLiteral(z.coerce.string()).optional(),
  unoptimized: scriptOrLiteral(z.coerce.boolean()).optional(),
});
