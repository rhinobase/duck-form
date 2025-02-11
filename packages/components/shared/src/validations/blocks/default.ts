import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

export const defaultSchema = type({
  type: "string",
  className: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
