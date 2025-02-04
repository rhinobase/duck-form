import z from "zod";
import { BlockType } from "../../utils";
import { duckSpecSchema } from "../schema";

type LinkSchemaType = {
  type: BlockType.LINK;
  className?: string;
  link?: string;
  blocks?: Record<string, z.infer<typeof duckSpecSchema>>;
};

export const linkSchema: z.ZodType<LinkSchemaType> = z.object({
  type: z.literal(BlockType.LINK),
  link: z.string().optional(),
  className: z.string().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => duckSpecSchema),
    )
    .optional(),
});
