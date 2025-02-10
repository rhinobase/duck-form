"use client";
import ArrayField from "@rhinobase/array-field";
import ButtonField from "@rhinobase/button";
import CalendarField from "@rhinobase/calendar-field";
import CheckboxField from "@rhinobase/checkbox-field";
import CheckboxGroupField from "@rhinobase/checkbox-group-field";
import ColorPickerField from "@rhinobase/color-picker-field";
import CurrencyField from "@rhinobase/currency-field";
import DateField from "@rhinobase/date-field";
import DateRangeField from "@rhinobase/date-range-field";
import DatetimeField from "@rhinobase/date-time-field";
import DefaultField from "@rhinobase/default";
import DivField from "@rhinobase/div";
import EditableNumberField from "@rhinobase/editable-number-field";
import EditableTextField from "@rhinobase/editable-text-field";
import EditableTextareaField from "@rhinobase/editable-textarea-field";
import Form from "@rhinobase/form";
import LinkField from "@rhinobase/link";
import ListboxField from "@rhinobase/listbox";
import MultiListboxField from "@rhinobase/multi-listbox";
import NumberField from "@rhinobase/number-field";
import ObjectField from "@rhinobase/object-field";
import ParagraphField from "@rhinobase/paragraph-field";
import PasswordField from "@rhinobase/password-field";
import PercentageField from "@rhinobase/percentage-field";
import PinField from "@rhinobase/pin-field";
import RadioGroupField from "@rhinobase/radio-group-field";
import RangeSliderField from "@rhinobase/range-slider-field";
import RatingField from "@rhinobase/rating-field";
import SegmentedControlField from "@rhinobase/segmented-control";
import SelectField from "@rhinobase/select-field";
import SliderField from "@rhinobase/slider-field";
import SpanField from "@rhinobase/span";
import StringField from "@rhinobase/string-field";
import SwitchField from "@rhinobase/switch-field";
import SwitchGroupField from "@rhinobase/switch-group-field";
import TagField from "@rhinobase/tag-field";
import TextField from "@rhinobase/text";
import TextareaField from "@rhinobase/textarea-field";
import ImageComponent from "@rhinobase/image";
import TableComponent from "@rhinobase/table";
import { DuckWrapper } from "./wrappers";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const wrapper = (Component: (props: any) => JSX.Element) => () =>
  (
    <DuckWrapper>
      <Component />
    </DuckWrapper>
  );

export const components = {
  array: ArrayField,
  calendar: wrapper(CalendarField),
  boolean: wrapper(CheckboxField),
  button: wrapper(ButtonField),
  image: wrapper(ImageComponent),
  checkboxgroup: wrapper(CheckboxGroupField),
  colorPicker: wrapper(ColorPickerField),
  currencyInput: wrapper(CurrencyField),
  date: wrapper(DateField),
  dateRange: wrapper(DateRangeField),
  datetime: wrapper(DatetimeField),
  default: wrapper(DefaultField),
  div: wrapper(DivField),
  editableNumber: wrapper(EditableNumberField),
  editableText: wrapper(EditableTextField),
  editableTextarea: wrapper(EditableTextareaField),
  form: Form,
  link: wrapper(LinkField),
  listbox: wrapper(ListboxField),
  multiListbox: wrapper(MultiListboxField),
  number: wrapper(NumberField),
  object: ObjectField,
  p: wrapper(ParagraphField),
  password: wrapper(PasswordField),
  percentageInput: wrapper(PercentageField),
  Pin: wrapper(PinField),
  radio: wrapper(RadioGroupField),
  rangeSlider: wrapper(RangeSliderField),
  rating: wrapper(RatingField),
  segmentedControl: wrapper(SegmentedControlField),
  select: wrapper(SelectField),
  slider: wrapper(SliderField),
  span: wrapper(SpanField),
  string: wrapper(StringField),
  switch: wrapper(SwitchField),
  switchGroup: wrapper(SwitchGroupField),
  data_table: wrapper(TableComponent),
  tag: wrapper(TagField),
  literal: wrapper(TextField),
  script: wrapper(TextField),
  textarea: wrapper(TextareaField),
};
