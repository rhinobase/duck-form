import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { duckSpecSchema } from "../../schema";

export const formSchema = type({
  type: `'${BlockType.FORM}'`,
  title: scriptOrLiteral("string").optional(),
  enableDevtool: scriptOrLiteral("boolean").optional(),
  onSubmit: scriptOrLiteral("((any, any) => void)").optional(),
  onError: scriptOrLiteral("((any, any) => void)").optional(),
  className: scriptOrLiteral("string").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
  defaultValue: scriptOrLiteral("Record<string,unknown>").optional(),
  validation: scriptOrLiteral("Record<string,unknown>").optional(),
});
