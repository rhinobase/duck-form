import { BlockType } from "../../../utils";
import { duckSpecSchema } from "../../schema";

import { type } from "arktype";

export const objectSchema = type({
  type: `'${BlockType.OBJECT}'`,
  fields: () => type.Record("string", duckSpecSchema),
  defaultValue: "unknown?",
  fieldsets: type({
    name: "string",
    label: "string",
  })
    .array()
    .optional(),
  options: type({
    "collapsible?": "boolean",
    "collapsed?": "boolean",
    "columns?": "number",
  }),
});
