import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

import { type } from "arktype";

export const spanSchema = type({
  type: `'${BlockType.SPAN}'`,
  className: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
