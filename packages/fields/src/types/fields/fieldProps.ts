import type { GeneralWrapperProps, InputWrapperProps } from "../wrappers";
import type { ArrayProps } from "./array";
import type { CalendarProps } from "./calendar";
import type { CheckboxProps } from "./checkbox";
import type { CheckboxGroupProps } from "./checkboxGroup";
import type { ColorPickerProps } from "./colorPicker";
import type { CurrencyInputProps } from "./currencyInput";
import type { DateFieldProps } from "./date";
import type { DateRangeFieldProps } from "./dateRange";
import type { EditableNumberProps } from "./editableNumber";
import type { EditableTextProps } from "./editableText";
import type { EditableTextareaProps } from "./editableTextarea";
import type { ListboxProps } from "./listbox";
import type { MultiListboxProps } from "./multiListbox";
import type { NumberProps } from "./number";
import type { ObjectProps } from "./object";
import type { PasswordProps } from "./password";
import type { PercentageInputProps } from "./percentageInput";
import type { PinInputProps } from "./pinInput";
import type { RadioGroupProps } from "./radio";
import type { RangeSliderProps } from "./rangeSlider";
import type { RatingProps } from "./rating";
import type { SegmentedControlProps } from "./segmentedControl";
import type { SelectProps } from "./select";
import type { SliderProps } from "./slider";
import type { StringProps } from "./string";
import type { SwitchProps } from "./switch";
import type { SwitchGroupProps } from "./switchGroup";
import type { TagFieldProps } from "./tagField";
import type { TextareaProps } from "./textarea";

export type FieldProps =
	| GeneralWrapperProps<CheckboxProps>
	| GeneralWrapperProps<CheckboxGroupProps>
	| GeneralWrapperProps<ColorPickerProps>
	| GeneralWrapperProps<CurrencyInputProps>
	| GeneralWrapperProps<DateFieldProps>
	| GeneralWrapperProps<DateRangeFieldProps>
	| ObjectProps
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
	| { type: "default" };

export type FieldPropsMap = {
	[K in FieldProps["type"]]: Extract<FieldProps, { type: K }>;
};
