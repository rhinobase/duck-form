"use client";
import { BlockWrapper, type FieldProps, quackFields } from "@duck-form/fields";
import { DevTool } from "@hookform/devtools";
import { Button } from "@rafty/ui";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import { FormProvider, useForm } from "react-hook-form";

const schema: Record<string, FieldProps> = {
  array: {
    type: "array",
    label: "Array",
    of: {
      type: "string",
      label: "String",
    },
  },
  calendar: {
    type: "calendar",
    label: "Calendar",
  },
  checkbox: {
    type: "boolean",
    label: "Checkbox",
    orientation: "row-reverse",
  },
  checkbox_group: {
    type: "checkboxgroup",
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
    type: "colorPicker",
    label: "Color Picker",
  },
  currency: {
    type: "currencyInput",
    label: "Currency",
  },
  date: {
    type: "date",
    label: "Date",
  },
  date_range: {
    type: "dateRange",
    label: "Date Range",
  },
  editable_number: {
    type: "editableNumber",
    label: "Editable Number",
  },
  editable_text: {
    type: "editableText",
    label: "Editable Text",
  },
  editable_textarea: {
    type: "editableTextarea",
    label: "Editable Textarea",
  },
  list_box: {
    type: "listbox",
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
    type: "multiListbox",
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
    type: "number",
    label: "Number",
  },
  object: {
    type: "object",
    fields: {
      string: {
        type: "string",
        label: "String",
      },
      string1: {
        type: "string",
        label: "String",
      },
      string2: {
        type: "string",
        label: "String",
      },
    },
  },
  password: {
    type: "password",
    label: "Password",
  },
  percentage: {
    type: "percentageInput",
    label: "Percentage",
  },
  pin: {
    type: "pin",
    label: "Pin",
    length: 4,
  },
  radio_group: {
    type: "radio",
    label: "Radio",
    options: [
      { value: 1, label: "1" },
      { value: "2", label: "2" },
    ],
  },
  range_slider: {
    type: "rangeSlider",
    label: "Range Slider",
  },
  rating: {
    type: "rating",
    label: "Rating",
    count: 5,
    allowHalf: true,
  },
  segmented_control: {
    type: "segmentedControl",
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
    type: "select",
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
    type: "slider",
    label: "Slider",
  },
  string: {
    type: "string",
    label: "String",
  },
  switch: {
    type: "switch",
    label: "Switch",
    orientation: "row-reverse",
  },
  switch_group: {
    type: "switchGroup",
    label: "Switch Group",
    options: [
      { value: 1, label: "1" },
      { value: "2", label: "2" },
    ],
  },
  tag: {
    type: "tag",
    label: "Tag",
  },
  textarea: {
    type: "textarea",
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
      <DuckForm
        components={quackFields}
        generateId={(_, props) => (props.id ? String(props.id) : undefined)}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(
              (value) => console.log(value),
              console.error,
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
