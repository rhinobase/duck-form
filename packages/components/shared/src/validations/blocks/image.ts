import z from "zod";
import { scriptOrLiteral } from "../../utils";

export const imageSchema = z.object({
  src: scriptOrLiteral(z.string()),
  alt: scriptOrLiteral(z.string()),
  width: scriptOrLiteral(z.number()).optional(),
  height: scriptOrLiteral(z.number()).optional(),
  className: scriptOrLiteral(z.string()).optional(),
  unoptimized: scriptOrLiteral(z.boolean()).optional(),
});
