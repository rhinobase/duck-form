import z from "zod";
import { scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type DefaultSchemaType = {
  type: string;
  className?:
    | { type: "literal"; value: unknown }
    | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
} & Record<string, unknown>;

export const defaultSchema: z.ZodType<DefaultSchemaType> = z
  .object({
    type: z.string(),
    className: scriptOrLiteral(z.string()).optional(),
    blocks: z
      .record(
        z.string(),
        z.lazy(() => z.any())
      )
      .optional(),
  })
  .passthrough();
