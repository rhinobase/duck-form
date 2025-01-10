import { ArrayField } from "./Array";
import { CalendarField } from "./Calendar";
import { CheckboxField } from "./Checkbox";
import { CheckboxGroupField } from "./CheckboxGroup";
import { ColorPickerField } from "./ColorPicker";
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
import type { FieldProps } from "./types";
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

export const quackFields: Record<FieldProps["type"], () => JSX.Element> = {
  array: ArrayField,
  calendar: wrapper(CalendarField),
  boolean: wrapper(CheckboxField),
  checkboxgroup: wrapper(CheckboxGroupField),
  colorPicker: wrapper(ColorPickerField),
  currencyInput: wrapper(CurrencyField),
  date: wrapper(DateField),
  dateRange: wrapper(DateRangeField),
  default: wrapper(DefaultField),
  editableNumber: wrapper(EditableNumberField),
  editableText: wrapper(EditableTextField),
  editableTextarea: wrapper(EditableTextareaField),
  listbox: wrapper(ListboxField),
  multiListbox: wrapper(MultiListboxField),
  number: wrapper(NumberField),
  object: ObjectField,
  password: wrapper(PasswordField),
  percentageInput: wrapper(PercentageField),
  pin: wrapper(PinField),
  radio: wrapper(RadioGroupField),
  rangeSlider: wrapper(RangeSliderField),
  rating: wrapper(RatingField),
  segmentedControl: wrapper(SegmentedControlField),
  select: wrapper(SelectField),
  slider: wrapper(SliderField),
  string: wrapper(StringField),
  switch: wrapper(SwitchField),
  switchGroup: wrapper(SwitchGroupField),
  tag: wrapper(TagField),
  textarea: wrapper(TextareaField),
};
