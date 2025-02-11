import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.RANGE_SLIDER}'`,
  name: scriptOrLiteral("string").optional(),
  min: scriptOrLiteral("number").optional(),
  max: scriptOrLiteral("number").optional(),
  step: scriptOrLiteral("number").optional(),
  defaultValue: scriptOrLiteral("[number, number]").optional(),
  value: scriptOrLiteral("[number, number]").optional(),
  onChange: scriptOrLiteral("(['string', 'number']?) => void"),
});

export const rangeSliderSchema = fieldWrapperSchema.and(schema);
