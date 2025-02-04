import z from "zod";
import { BlockType } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.ARRAY),
  of: z.record(z.string()),
  defaultValue: z
    .union([z.array(z.unknown()), z.function().returns(z.array(z.unknown()))])
    .optional(),
  options: z
    .object({
      sortable: z.boolean().optional(),
      layout: z.enum(["tags", "grid"]).optional(),
      list: z
        .array(
          z.object({
            title: z.string(),
            value: z.any(),
          }),
        )
        .optional(),
      editModal: z.enum(["dialog", "fullscreen", "popover"]).optional(),
    })
    .optional(),
});

export const arraySchema = fieldWrapperSchema.merge(schema);
