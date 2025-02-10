import z from "zod";
import { BlockType, scriptOrLiteral } from "../../utils";
// import { duckSpecSchema } from "../schema";

type LinkSchemaType = {
  type: BlockType.LINK;
  className?:
    | { type: "literal"; value: string }
    | { type: "script"; value: string };
  link?: { type: "literal"; value: string } | { type: "script"; value: string };
  target?:
    | { type: "literal"; value: "_blank" | "_parent" | "_self" | "_top" }
    | { type: "script"; value: string };
  rel?: { type: "literal"; value: string } | { type: "script"; value: string };
  blocks?: Record<string, unknown>;
};

export const linkSchema: z.ZodType<LinkSchemaType> = z.object({
  type: z.literal(BlockType.LINK),
  link: scriptOrLiteral(z.string()).optional(),
  className: scriptOrLiteral(z.string()).optional(),
  target: scriptOrLiteral(
    z.enum(["_blank", "_parent", "_self", "_top"])
  ).optional(),
  rel: scriptOrLiteral(z.string()).optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
