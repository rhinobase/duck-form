import z from "zod";
import { BlockType } from "../../utils";
// import { duckSpecSchema } from "../schema";

type LinkSchemaType = {
  type: BlockType.LINK;
  className?: string;
  link?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
  rel?: string;
  blocks?: Record<string, unknown>;
};

export const linkSchema: z.ZodType<LinkSchemaType> = z.object({
  type: z.literal(BlockType.LINK),
  link: z.string().optional(),
  className: z.string().optional(),
  target: z.enum(["_blank", "_parent", "_self", "_top"]),
  rel: z.string().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => z.any())
    )
    .optional(),
});
