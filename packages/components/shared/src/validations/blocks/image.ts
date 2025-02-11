import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";

export const imageSchema = type({
  type: `'${BlockType.IMAGE}'`,
  src: scriptOrLiteral("string"),
  alt: scriptOrLiteral("string"),
  width: scriptOrLiteral("number").optional(),
  height: scriptOrLiteral("number").optional(),
  className: scriptOrLiteral("string").optional(),
  unoptimized: scriptOrLiteral("boolean").optional(),
});
