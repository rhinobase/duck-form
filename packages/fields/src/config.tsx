import { BlockType } from "./constants";
import { DefaultField } from "./Default";
import { Div } from "./Div";
import {
  ArrayField,
  CalendarField,
  CheckboxField,
  CheckboxGroupField,
  ColorPickerField,
  CurrencyField,
  DateField,
  DateRangeField,
  DatetimeField,
  EditableNumberField,
  EditableTextareaField,
  EditableTextField,
  Form,
  ListboxField,
  MultiListboxField,
  NumberField,
  ObjectField,
  PasswordField,
  PercentageField,
  PinField,
  RadioGroupField,
  RangeSliderField,
  RatingField,
  ReactHookFormWrapper,
  SegmentedControlField,
  SelectField,
  SliderField,
  StringField,
  SwitchField,
  SwitchGroupField,
  TagField,
  TextareaField,
} from "./fields";
import { Link } from "./Link";
import { Paragraph } from "./Paragraph";
import { Span } from "./Span";
import { Text } from "./Text";
import { DuckWrapper } from "./wrappers";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
const wrapper = (Component: (props: any) => JSX.Element) => () =>
  (
    <DuckWrapper>
      <ReactHookFormWrapper>
        <Component />
      </ReactHookFormWrapper>
    </DuckWrapper>
  );

export const quackFields: Record<BlockType, () => JSX.Element> = {
  [BlockType.ARRAY]: ArrayField,
  [BlockType.CALENDAR]: wrapper(CalendarField),
  [BlockType.BOOLEAN]: wrapper(CheckboxField),
  [BlockType.CHECKBOX_GROUP]: wrapper(CheckboxGroupField),
  [BlockType.COLOR_PICKER]: wrapper(ColorPickerField),
  [BlockType.CURRENCY_INPUT]: wrapper(CurrencyField),
  [BlockType.DATE]: wrapper(DateField),
  [BlockType.DATE_RANGE]: wrapper(DateRangeField),
  [BlockType.DATE_TIME]: wrapper(DatetimeField),
  [BlockType.DEFAULT]: wrapper(DefaultField),
  [BlockType.EDITABLE_NUMBER]: wrapper(EditableNumberField),
  [BlockType.EDITABLE_TEXT]: wrapper(EditableTextField),
  [BlockType.EDITABLE_TEXTAREA]: wrapper(EditableTextareaField),
  [BlockType.LISTBOX]: wrapper(ListboxField),
  [BlockType.MULTI_LISTBOX]: wrapper(MultiListboxField),
  [BlockType.NUMBER]: wrapper(NumberField),
  [BlockType.OBJECT]: ObjectField,
  [BlockType.PASSWORD]: wrapper(PasswordField),
  [BlockType.PERCENTAGE_INPUT]: wrapper(PercentageField),
  [BlockType.PIN]: wrapper(PinField),
  [BlockType.RADIO]: wrapper(RadioGroupField),
  [BlockType.RANGE_SLIDER]: wrapper(RangeSliderField),
  [BlockType.RATING]: wrapper(RatingField),
  [BlockType.SEGMENTED_CONTROL]: wrapper(SegmentedControlField),
  [BlockType.SELECT]: wrapper(SelectField),
  [BlockType.SLIDER]: wrapper(SliderField),
  [BlockType.STRING]: wrapper(StringField),
  [BlockType.SWTICH]: wrapper(SwitchField),
  [BlockType.SWITCH_GROUP]: wrapper(SwitchGroupField),
  [BlockType.TAG]: wrapper(TagField),
  [BlockType.TEXTAREA]: wrapper(TextareaField),
  [BlockType.LINK]: Link,
  [BlockType.DIV]: Div,
  [BlockType.SPAN]: Span,
  [BlockType.TEXT]: Text,
  [BlockType.PARAGRAPH]: Paragraph,
  [BlockType.FORM]: Form,
};
