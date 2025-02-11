import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

export const divSchema = type({
  type: `'${BlockType.DIV}'`,
  className: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
