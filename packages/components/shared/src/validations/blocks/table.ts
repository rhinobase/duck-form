import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";

export const tableSchema = type({
  type: `'${BlockType.TABLE}'`,
  columns: scriptOrLiteral("string[]"),
  data: scriptOrLiteral(type("Record<string,string>").array()),
  className: scriptOrLiteral("string").optional(),
  variant: scriptOrLiteral("'simple' | 'striped'").optional(),
  size: scriptOrLiteral("'sm' | 'md' | 'lg'").optional(),
});
