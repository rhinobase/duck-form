"use client";
import {
  BlockWrapper,
  type FieldProps,
  BlockType,
  quackFields,
} from "@duck-form/fields";
import { DevTool } from "@hookform/devtools";
import { Button } from "@rafty/ui";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import { FormProvider, useForm } from "react-hook-form";

const schema: Record<string, FieldProps> = {
  array: {
    type: BlockType.ARRAY,
    label: "Array",
    of: {
      type: BlockType.STRING,
      label: "String",
    },
  },
  calendar: {
    type: BlockType.CALENDAR,
    label: "Calendar",
  },
  checkbox: {
    type: BlockType.BOOLEAN,
    label: "Checkbox",
    orientation: "row-reverse",
  },
  checkbox_group: {
    type: BlockType.CHECKBOX_GROUP,
    label: "Checkbox Group",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
  },
  color_picker: {
    type: BlockType.COLOR_PICKER,
    label: "Color Picker",
  },
  currency: {
    type: BlockType.CURRENCY_INPUT,
    label: "Currency",
  },
  date: {
    type: BlockType.DATE,
    label: "Date",
  },
  date_range: {
    type: BlockType.DATE_RANGE,
    label: "Date Range",
  },
  editable_number: {
    type: BlockType.EDITABLE_NUMBER,
    label: "Editable Number",
  },
  editable_text: {
    type: BlockType.EDITABLE_TEXT,
    label: "Editable Text",
  },
  editable_textarea: {
    type: BlockType.EDITABLE_TEXTAREA,
    label: "Editable Textarea",
  },
  list_box: {
    type: BlockType.LISTBOX,
    label: "List Box",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
  },
  multi_list_box: {
    type: BlockType.MULTI_LISTBOX,
    label: "Multi Listbox",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
  },
  number: {
    type: BlockType.NUMBER,
    label: "Number",
  },
  object: {
    type: BlockType.OBJECT,
    fields: {
      string: {
        type: BlockType.STRING,
        label: "String",
      },
      string1: {
        type: BlockType.STRING,
        label: "String",
      },
      string2: {
        type: BlockType.STRING,
        label: "String",
      },
    },
  },
  password: {
    type: BlockType.PASSWORD,
    label: "Password",
  },
  percentage: {
    type: BlockType.PERCENTAGE_INPUT,
    label: "Percentage",
  },
  pin: {
    type: BlockType.PIN,
    label: "Pin",
    length: 4,
  },
  radio_group: {
    type: BlockType.RADIO,
    label: "Radio",
    options: [
      { value: 1, label: "1" },
      { value: "2", label: "2" },
    ],
  },
  range_slider: {
    type: BlockType.RANGE_SLIDER,
    label: "Range Slider",
  },
  rating: {
    type: BlockType.RATING,
    label: "Rating",
    count: 5,
    allowHalf: true,
  },
  segmented_control: {
    type: BlockType.SEGMENTED_CONTROL,
    label: "Segmented Control",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
  },
  select: {
    type: BlockType.SELECT,
    label: "Select",
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
      { value: "6", label: "6" },
    ],
  },
  slider: {
    type: BlockType.SLIDER,
    label: "Slider",
  },
  string: {
    type: BlockType.STRING,
    label: "String",
  },
  switch: {
    type: BlockType.SWTICH,
    label: "Switch",
    orientation: "row-reverse",
  },
  switch_group: {
    type: BlockType.SWITCH_GROUP,
    label: "Switch Group",
    options: [
      { value: 1, label: "1" },
      { value: "2", label: "2" },
    ],
  },
  tag: {
    type: BlockType.TAG,
    label: "Tag",
  },
  textarea: {
    type: BlockType.TEXTAREA,
    label: "Textarea",
  },
};

export default function HomePage() {
  const methods = useForm();

  const {
    handleSubmit,
    formState: { isSubmitting },
    control,
  } = methods;

  return (
    <div className="max-w-4xl mx-auto w-full py-6 flex flex-col gap-4">
      <DuckForm components={quackFields}>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(
              (value) => console.log(value),
              console.error
            )}
            className="space-y-3"
          >
            <Blueprint schema={schema} wrapper={BlockWrapper}>
              {Object.keys(schema).map((key) => (
                <DuckField key={key} id={key} />
              ))}
            </Blueprint>
            <Button
              type="submit"
              isLoading={isSubmitting}
              loadingText="Submitting"
              colorScheme="primary"
              className="ml-auto"
            >
              Submit
            </Button>
          </form>
          <DevTool control={control} />
        </FormProvider>
      </DuckForm>
    </div>
  );
}
