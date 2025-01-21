import type { ArrayProps } from "./Array";
import type { CalendarProps } from "./Calendar";
import type { CheckboxProps } from "./Checkbox";
import type { CheckboxGroupProps } from "./CheckboxGroup";
import type { ColorPickerProps } from "./ColorPicker";
import type { BlockType } from "./constants";
import type { CurrencyInputProps } from "./Currency";
import type { DateFieldProps } from "./Date";
import type { DateRangeFieldProps } from "./DateRange";
import type { DatetimeFieldProps } from "./Datetime";
import type { DivProps } from "./Div";
import type { EditableNumberProps } from "./EditableNumber";
import type { EditableTextProps } from "./EditableText";
import type { EditableTextareaProps } from "./EditableTextarea";
import type { FieldWrapperProps } from "./FieldWrapper";
import type { FormProps } from "./Form";
import type { InputWrapperProps } from "./InputWrapper";
import type { LinkProps } from "./Link";
import type { ListboxProps } from "./Listbox";
import type { MultiListboxProps } from "./MultiListbox";
import type { NumberProps } from "./Number";
import type { ObjectProps } from "./Object";
import type { ParagraphProps } from "./Paragraph";
import type { PasswordProps } from "./Password";
import type { PercentageInputProps } from "./Percentage";
import type { PinInputProps } from "./Pin";
import type { RadioGroupProps } from "./RadioGroup";
import type { RangeSliderProps } from "./RangeSlider";
import type { RatingProps } from "./Rating";
import type { SegmentedControlProps } from "./SegmentedControl";
import type { SelectProps } from "./Select";
import type { SliderProps } from "./Slider";
import type { SpanProps } from "./Span";
import type { StringProps } from "./String";
import type { SwitchProps } from "./Switch";
import type { SwitchGroupProps } from "./SwitchGroup";
import type { TagFieldProps } from "./Tag";
import type { TextProps } from "./Text";
import type { TextareaProps } from "./Textarea";
import type { TooltipWrapperProps } from "./TooltipWrapper";

export type GeneralWrapperProps<T = undefined> = T &
  FieldWrapperProps &
  TooltipWrapperProps & { fieldset?: string };

export type FieldProps =
  | GeneralWrapperProps<CheckboxProps>
  | GeneralWrapperProps<CheckboxGroupProps>
  | GeneralWrapperProps<ColorPickerProps>
  | GeneralWrapperProps<CurrencyInputProps>
  | GeneralWrapperProps<DateFieldProps>
  | GeneralWrapperProps<DateRangeFieldProps>
  | GeneralWrapperProps<DatetimeFieldProps>
  | (ObjectProps & { fieldset?: string })
  | GeneralWrapperProps<NumberProps & InputWrapperProps>
  | GeneralWrapperProps<PasswordProps & InputWrapperProps>
  | GeneralWrapperProps<PercentageInputProps>
  | GeneralWrapperProps<RadioGroupProps>
  | GeneralWrapperProps<SelectProps>
  | GeneralWrapperProps<SliderProps>
  | GeneralWrapperProps<RangeSliderProps>
  | GeneralWrapperProps<StringProps & InputWrapperProps>
  | GeneralWrapperProps<SwitchProps>
  | GeneralWrapperProps<SwitchGroupProps>
  | GeneralWrapperProps<TextareaProps>
  | GeneralWrapperProps<TagFieldProps>
  | GeneralWrapperProps<PinInputProps>
  | GeneralWrapperProps<RatingProps>
  | GeneralWrapperProps<SegmentedControlProps>
  | GeneralWrapperProps<EditableTextProps>
  | GeneralWrapperProps<EditableTextareaProps>
  | DivProps
  | LinkProps
  | FormProps
  | ParagraphProps
  | SpanProps
  | TextProps
  | GeneralWrapperProps<MultiListboxProps>
  | GeneralWrapperProps<ListboxProps>
  | GeneralWrapperProps<EditableNumberProps>
  | GeneralWrapperProps<CalendarProps>
  | GeneralWrapperProps<ArrayProps>;

export type FieldPropsMap = {
  [K in BlockType]: Extract<FieldProps, { type: K }>;
};

export type {
  ArrayProps,
  CalendarProps,
  CheckboxGroupProps,
  CheckboxProps,
  ColorPickerProps,
  CurrencyInputProps,
  DateFieldProps,
  DateRangeFieldProps,
  DatetimeFieldProps,
  DivProps,
  EditableNumberProps,
  EditableTextareaProps,
  EditableTextProps,
  FieldWrapperProps,
  FormProps,
  InputWrapperProps,
  LinkProps,
  ListboxProps,
  MultiListboxProps,
  NumberProps,
  ObjectProps,
  ParagraphProps,
  PasswordProps,
  PercentageInputProps,
  PinInputProps,
  RadioGroupProps,
  RangeSliderProps,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  SpanProps,
  StringProps,
  SwitchGroupProps,
  SwitchProps,
  TagFieldProps,
  TextareaProps,
  TextProps,
  TooltipWrapperProps,
};
