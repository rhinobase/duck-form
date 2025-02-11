import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";

export const textSchema = type({
  type: `'${BlockType.TEXT}'`,
  content: scriptOrLiteral("string"),
});
