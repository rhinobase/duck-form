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

export type Promisify<T> = T | Promise<T>;

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & NonNullable<unknown>;

export type DefaultValue<T extends Record<string, FieldProps>> = {
  [K in keyof T]?: T[K] extends { blocks: Record<string, FieldProps> }
    ? DefaultValue<T[K]["blocks"]>
    : // @ts-expect-error
      FieldPropsMap[T[K]["type"]]["defaultValue"];
};

export type FieldProps =
  | CheckboxProps
  | CheckboxGroupProps
  | ColorPickerProps
  | CurrencyInputProps
  | DateFieldProps
  | DateRangeFieldProps
  | DatetimeFieldProps
  | (ObjectProps & { fieldset?: string })
  | NumberProps
  | PasswordProps
  | PercentageInputProps
  | RadioGroupProps
  | SelectProps
  | SliderProps
  | RangeSliderProps
  | StringProps
  | SwitchProps
  | SwitchGroupProps
  | TextareaProps
  | TagFieldProps
  | PinInputProps
  | RatingProps
  | SegmentedControlProps
  | EditableTextProps
  | EditableTextareaProps
  | MultiListboxProps
  | ListboxProps
  | EditableNumberProps
  | CalendarProps
  | ArrayProps
  | (DivProps & { fieldset?: string })
  | (LinkProps & { fieldset?: string })
  | (FormProps & { fieldset?: string })
  | (ParagraphProps & { fieldset?: string })
  | (SpanProps & { fieldset?: string })
  | (TextProps & { fieldset?: string });

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
