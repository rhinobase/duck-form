import type { BlockType } from "./constants";
import type { DivProps } from "./Div";
import type {
  ArrayProps,
  CalendarProps,
  CheckboxGroupProps,
  CheckboxProps,
  ColorPickerProps,
  CurrencyInputProps,
  DateFieldProps,
  DateRangeFieldProps,
  DatetimeFieldProps,
  EditableNumberProps,
  EditableTextProps,
  EditableTextareaProps,
  FieldWrapperProps,
  FormProps,
  InputWrapperProps,
  ListboxProps,
  MultiListboxProps,
  NumberProps,
  ObjectProps,
  PasswordProps,
  PercentageInputProps,
  PinInputProps,
  RadioGroupProps,
  RangeSliderProps,
  RatingProps,
  SegmentedControlProps,
  SelectProps,
  SliderProps,
  StringProps,
  SwitchGroupProps,
  SwitchProps,
  TagFieldProps,
  TextareaProps,
  TooltipWrapperProps,
} from "./fields";
import type { LinkProps } from "./Link";
import type { ParagraphProps } from "./Paragraph";
import type { SpanProps } from "./Span";
import type { TextProps } from "./Text";

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
  | GeneralWrapperProps<MultiListboxProps>
  | GeneralWrapperProps<ListboxProps>
  | GeneralWrapperProps<EditableNumberProps>
  | GeneralWrapperProps<CalendarProps>
  | GeneralWrapperProps<ArrayProps>
  | DivProps
  | LinkProps
  | FormProps
  | ParagraphProps
  | SpanProps
  | TextProps;

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
  EditableTextProps,
  EditableTextareaProps,
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
  TextProps,
  TextareaProps,
  TooltipWrapperProps,
};
