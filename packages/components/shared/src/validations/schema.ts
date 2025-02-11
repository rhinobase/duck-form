import { type } from "arktype";
import {
  arraySchema,
  calendarSchema,
  checkboxGroupSchema,
  checkboxSchema,
  colorPickerSchema,
  currencyInputSchema,
  dateRangeSchema,
  dateSchema,
  datetimeSchema,
  divSchema,
  editableNumberSchema,
  editableTextSchema,
  editableTextareaSchema,
  formSchema,
  linkSchema,
  listboxSchema,
  multiListboxSchema,
  numberSchema,
  objectSchema,
  paragraphSchema,
  passwordSchema,
  percentageInputSchema,
  pinSchema,
  radioGroupSchema,
  rangeSliderSchema,
  ratingSchema,
  segmentedControlSchema,
  selectSchema,
  sliderSchema,
  spanSchema,
  stringSchema,
  switchGroupSchema,
  switchSchema,
  tagSchema,
  textSchema,
  textareaSchema,
} from "./blocks";

const schema = type(datetimeSchema)
  .or(divSchema)
  .or(dateRangeSchema)
  .or(objectSchema)
  .or(editableTextareaSchema)
  .or(editableNumberSchema)
  .or(sliderSchema)
  .or(numberSchema)
  .or(dateSchema)
  .or(multiListboxSchema)
  .or(passwordSchema)
  .or(listboxSchema)
  .or(formSchema)
  .or(ratingSchema)
  .or(editableTextSchema)
  .or(percentageInputSchema);

export const duckSpecSchema = type(schema)
  .or(spanSchema)
  .or(pinSchema)
  .or(selectSchema)
  .or(rangeSliderSchema)
  .or(paragraphSchema)
  .or(switchSchema)
  .or(tagSchema)
  .or(segmentedControlSchema)
  .or(stringSchema)
  .or(textareaSchema)
  .or(textSchema)
  .or(linkSchema)
  .or(arraySchema)
  .or(radioGroupSchema)
  .or(switchGroupSchema)
  .or(calendarSchema)
  .or(checkboxGroupSchema)
  .or(checkboxSchema)
  .or(colorPickerSchema)
  .or(currencyInputSchema);
