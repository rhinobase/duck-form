import z from "zod";
import { BlockType } from "../../constants";
import { duckSpecSchema } from "../schema";

type DivSchemaType = {
  type: BlockType.DIV;
  className?: string;
  blocks?: Record<string, z.infer<typeof duckSpecSchema>>;
};

export const divSchema: z.ZodType<DivSchemaType> = z.object({
  type: z.literal(BlockType.DIV),
  className: z.string().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => duckSpecSchema)
    )
    .optional(),
});
