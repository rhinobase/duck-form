import { ArrayField } from "./Array";
import { CalendarField } from "./Calendar";
import { CheckboxField } from "./Checkbox";
import { CheckboxGroupField } from "./CheckboxGroup";
import { ColorPickerField } from "./ColorPicker";
import { BlockType } from "./constants";
import { CurrencyField } from "./Currency";
import { DateField } from "./Date";
import { DateRangeField } from "./DateRange";
import { DatetimeField } from "./Datetime";
import { DefaultField } from "./Default";
import { Div } from "./Div";
import { EditableNumberField } from "./EditableNumber";
import { EditableTextField } from "./EditableText";
import { EditableTextareaField } from "./EditableTextarea";
import { Form } from "./Form";
import { Link } from "./Link";
import { ListboxField } from "./Listbox";
import { MultiListboxField } from "./MultiListbox";
import { NumberField } from "./Number";
import { ObjectField } from "./Object";
import { Paragraph } from "./Paragraph";
import { PasswordField } from "./Password";
import { PercentageField } from "./Percentage";
import { PinField } from "./Pin";
import { RadioGroupField } from "./RadioGroup";
import { RangeSliderField } from "./RangeSlider";
import { RatingField } from "./Rating";
import { SegmentedControlField } from "./SegmentedControl";
import { SelectField } from "./Select";
import { SliderField } from "./Slider";
import { Span } from "./Span";
import { StringField } from "./String";
import { SwitchField } from "./Switch";
import { SwitchGroupField } from "./SwitchGroup";
import { TagField } from "./Tag";
import { Text } from "./Text";
import { TextareaField } from "./Textarea";
import { DuckWrapper, ReactHookFormWrapper } from "./wrappers";

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
