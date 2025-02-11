import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

export const linkSchema = type({
  type: `'${BlockType.LINK}'`,
  link: scriptOrLiteral("string").optional(),
  className: scriptOrLiteral("string").optional(),
  target: scriptOrLiteral("'_blank' | '_parent' | '_self' | '_top'").optional(),
  rel: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
