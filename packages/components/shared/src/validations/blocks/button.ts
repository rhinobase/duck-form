import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type ButtonSchemaType = {
  type: BlockType.BUTTON;
  className?:
    | { type: "literal"; value: string }
    | { type: "script"; value: string };
  btnType?:
    | { type: "literal"; value: "submit" | "reset" | "button" }
    | { type: "script"; value: string };
  leftIcon?:
    | { type: "literal"; value?: JSX.Element }
    | { type: "script"; value: string };
  rightIcon?:
    | { type: "literal"; value?: JSX.Element }
    | { type: "script"; value: string };
  isLoading?:
    | { type: "literal"; value: boolean }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const buttonSchema: z.ZodType<ButtonSchemaType> = z.object({
  type: z.literal(BlockType.BUTTON),
  className: scriptOrLiteral(z.coerce.string()).optional(),
  btnType: scriptOrLiteral(z.enum(["submit", "reset", "button"])).optional(),
  leftIcon: scriptOrLiteral(z.any()).optional(),
  rightIcon: scriptOrLiteral(z.any()).optional(),
  isLoading: scriptOrLiteral(z.boolean()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
