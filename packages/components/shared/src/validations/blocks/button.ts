import z from "zod";
import { BlockType } from "../../utils";
import { duckSpecSchema } from "../schema";

type ButtonSchemaType = {
  type: BlockType.BUTTON;
  className?: string;
  btnType?: "submit" | "reset" | "button";
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  isLoading?: boolean;
  blocks?: Record<string, z.infer<typeof duckSpecSchema>>;
};

export const buttonSchema: z.ZodType<ButtonSchemaType> = z.object({
  type: z.literal(BlockType.BUTTON),
  className: z.string().optional(),
  btnType: z.enum(["submit", "reset", "button"]).optional(),
  leftIcon: z.any().optional(),
  rightIcon: z.any().optional(),
  isLoading: z.boolean().optional(),
  blocks: z
    .record(
      z.string(),
      z.lazy(() => duckSpecSchema),
    )
    .optional(),
});
