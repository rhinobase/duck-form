import { type } from "arktype";
import { BlockType } from "../../../utils";
import { duckSpecSchema } from "../../schema";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.ARRAY}'`,
  of: () => type.Record("string", duckSpecSchema),
  defaultValue: type("unknown").array(),
  options: type({
    sortable: "boolean?",
    "layout?": '"tags" | "grid"',
    list: type({
      title: "string",
      value: "unknown",
    })
      .array()
      .optional(),
    editModal: '"dialog" | "fullscreen" | "popover"?',
  }),
});

export const arraySchema = fieldWrapperSchema.merge(schema);
