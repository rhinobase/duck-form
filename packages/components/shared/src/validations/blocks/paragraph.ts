import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

export const paragraphSchema = type({
  type: `'${BlockType.PARAGRAPH}'`,
  className: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
