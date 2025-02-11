import { type } from "arktype";
import { BlockType, scriptOrLiteral } from "../../../utils";
import { fieldWrapperSchema } from "./fieldWrapper";

const schema = type({
  type: `'${BlockType.SLIDER}'`,
  name: scriptOrLiteral("string").optional(),
  min: scriptOrLiteral("number").optional(),
  max: scriptOrLiteral("number").optional(),
  step: scriptOrLiteral("number").optional(),
  defaultValue: scriptOrLiteral("number").optional(),
  value: scriptOrLiteral("number").optional(),
  onChange: scriptOrLiteral("(number)=>void").optional(),
});

export const sliderSchema = fieldWrapperSchema.merge(schema);
