import type { FieldProps } from "../types";
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

export const blocks: Record<FieldProps["type"], () => JSX.Element> = {
	array: ArrayField,
	calendar: CalendarField,
	boolean: CheckboxField,
	checkboxgroup: CheckboxGroupField,
	colorPicker: ColorPickerField,
	currencyInput: CurrencyField,
	date: DateField,
	dateRange: DateRangeField,
	default: DefaultField,
	editableNumber: EditableNumberField,
	editableText: EditableTextField,
	editableTextarea: EditableTextareaField,
	listbox: ListboxField,
	multiListbox: MultiListboxField,
	number: NumberField,
	object: ObjectField,
	password: PasswordField,
	percentageInput: PercentageField,
	pin: PinField,
	radio: RadioGroupField,
	rangeSlider: RangeSliderField,
	rating: RatingField,
	segmentedControl: SegmentedControlField,
	select: SelectField,
	slider: SliderField,
	string: StringField,
	switch: SwitchField,
	switchGroup: SwitchGroupField,
	tag: TagField,
	textarea: TextareaField,
};

export { BlockWrapper } from "./BlockWrapper";
