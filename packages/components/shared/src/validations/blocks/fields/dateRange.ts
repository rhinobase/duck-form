import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.DATE_RANGE}'`,
  name: scriptOrLiteral("string").optional(),
  placeholder: scriptOrLiteral(
    type({
      from: "string?",
      to: "string?",
    })
  ).optional(),
  defaultValue: scriptOrLiteral(
    type(["string"]).or(["string", "string"])
  ).optional(),
  value: scriptOrLiteral(type(["string"]).or(["string", "string"])).optional(),
  onChange: scriptOrLiteral(
    "((['string'] | ['string', 'string'])?) => void"
  ).optional(),
});

export const dateRangeSchema = fieldWrapperSchema.and(schema);
