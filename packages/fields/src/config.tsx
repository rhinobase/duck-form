import { ArrayField } from "./Array";
import { CalendarField } from "./Calendar";
import { CheckboxField } from "./Checkbox";
import { CheckboxGroupField } from "./CheckboxGroup";
import { ColorPickerField } from "./ColorPicker";
import { FieldType } from "./constants";
import { CurrencyField } from "./Currency";
import { DateField } from "./Date";
import { DateRangeField } from "./DateRange";
import { DefaultField } from "./Default";
import { EditableNumberField } from "./EditableNumber";
import { EditableTextField } from "./EditableText";
import { EditableTextareaField } from "./EditableTextarea";
import { ListboxField } from "./Listbox";
import { MultiListboxField } from "./MultiListbox";
import { NumberField } from "./Number";
import { ObjectField } from "./Object";
import { PasswordField } from "./Password";
import { PercentageField } from "./Percentage";
import { PinField } from "./Pin";
import { RadioGroupField } from "./RadioGroup";
import { RangeSliderField } from "./RangeSlider";
import { RatingField } from "./Rating";
import { SegmentedControlField } from "./SegmentedControl";
import { SelectField } from "./Select";
import { SliderField } from "./Slider";
import { StringField } from "./String";
import { SwitchField } from "./Switch";
import { SwitchGroupField } from "./SwitchGroup";
import { TagField } from "./Tag";
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

export const quackFields: Record<FieldType, () => JSX.Element> = {
  [FieldType.ARRAY]: ArrayField,
  [FieldType.CALENDAR]: wrapper(CalendarField),
  [FieldType.BOOLEAN]: wrapper(CheckboxField),
  [FieldType.CHECKBOX_GROUP]: wrapper(CheckboxGroupField),
  [FieldType.COLOR_PICKER]: wrapper(ColorPickerField),
  [FieldType.CURRENCY_INPUT]: wrapper(CurrencyField),
  [FieldType.DATE]: wrapper(DateField),
  [FieldType.DATE_RANGE]: wrapper(DateRangeField),
  [FieldType.DEFAULT]: wrapper(DefaultField),
  [FieldType.EDITABLE_NUMBER]: wrapper(EditableNumberField),
  [FieldType.EDITABLE_TEXT]: wrapper(EditableTextField),
  [FieldType.EDITABLE_TEXTAREA]: wrapper(EditableTextareaField),
  [FieldType.LISTBOX]: wrapper(ListboxField),
  [FieldType.MULTI_LISTBOX]: wrapper(MultiListboxField),
  [FieldType.NUMBER]: wrapper(NumberField),
  [FieldType.OBJECT]: ObjectField,
  [FieldType.PASSWORD]: wrapper(PasswordField),
  [FieldType.PERCENTAGE_INPUT]: wrapper(PercentageField),
  [FieldType.PIN]: wrapper(PinField),
  [FieldType.RADIO]: wrapper(RadioGroupField),
  [FieldType.RANGE_SLIDER]: wrapper(RangeSliderField),
  [FieldType.RATING]: wrapper(RatingField),
  [FieldType.SEGMENTED_CONTROL]: wrapper(SegmentedControlField),
  [FieldType.SELECT]: wrapper(SelectField),
  [FieldType.SLIDER]: wrapper(SliderField),
  [FieldType.STRING]: wrapper(StringField),
  [FieldType.SWTICH]: wrapper(SwitchField),
  [FieldType.SWITCH_GROUP]: wrapper(SwitchGroupField),
  [FieldType.TAG]: wrapper(TagField),
  [FieldType.TEXTAREA]: wrapper(TextareaField),
};
