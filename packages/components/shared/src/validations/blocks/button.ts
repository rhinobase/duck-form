import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../utils";
import { duckSpecSchema } from "../schema";

export const buttonSchema = type({
  type: `'${BlockType.BUTTON}'`,
  className: scriptOrLiteral("string").optional(),
  btnType: scriptOrLiteral("'submit' | 'reset' | 'button'").optional(),
  leftIcon: scriptOrLiteral("any").optional(),
  rightIcon: scriptOrLiteral("any").optional(),
  isLoading: scriptOrLiteral("boolean").optional(),
  blocks: () => type.Record("string", duckSpecSchema),
});
