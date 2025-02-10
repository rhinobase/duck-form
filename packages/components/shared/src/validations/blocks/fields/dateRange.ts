import z from "zod";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = z.object({
  type: z.literal(BlockType.DATE_RANGE),
  name: scriptOrLiteral(z.string().optional()),
  placeholder: scriptOrLiteral(
    z.object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
  ).optional(),
  defaultValue: scriptOrLiteral(
    z.union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
  ).optional(),
  value: scriptOrLiteral(
    z.union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
  ).optional(),
  onChange: scriptOrLiteral(
    z
      .function()
      .args(
        z
          .union([z.tuple([z.string()]), z.tuple([z.string(), z.string()])])
          .optional()
      )
      .returns(z.void())
  ).optional(),
});

export const dateRangeSchema = fieldWrapperSchema.merge(schema);
