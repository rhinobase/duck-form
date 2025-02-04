import z from "zod";
import type { DefaultValue, Prettify } from "../../../types";
import { BlockType } from "../../../utils";
import { duckSpecSchema } from "../../schema";

type ObjectProps = {
  type: BlockType.OBJECT;
  fields: Record<string, z.infer<typeof duckSpecSchema>>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  defaultValue?: Prettify<DefaultValue<Record<string, any>>>;
  fieldsets?: { name: string; label: string }[];
  options?: {
    collapsible?: boolean;
    collapsed?: boolean;
    columns?: number;
  };
};

export const objectSchema: z.ZodType<ObjectProps> = z.object({
  type: z.literal(BlockType.OBJECT),
  fields: z.record(
    z.string(),
    z.lazy(() => duckSpecSchema),
  ),
  defaultValue: z.any().optional(),
  fieldsets: z
    .array(
      z.object({
        name: z.string(),
        label: z.string(),
      }),
    )
    .optional(),
  options: z
    .object({
      collapsible: z.boolean().optional(),
      collapsed: z.boolean().optional(),
      columns: z.number().optional(),
    })
    .optional(),
});
