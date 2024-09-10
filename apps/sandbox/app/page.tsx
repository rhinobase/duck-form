"use client";
import { BlockWrapper, type FieldProps, quackFields } from "@duck-form/fields";
import { Blueprint, DuckField, DuckForm } from "duck-form";
import { FormProvider, useForm } from "react-hook-form";

const schema: Record<string, FieldProps> = {
  name: {
    type: "string",
    label: "Name",
  },
};

export default function HomePage() {
  const methods = useForm();
  return (
    <div className="max-w-4xl mx-auto w-full py-6 flex flex-col gap-4">
      <DuckForm components={quackFields}>
        <FormProvider {...methods}>
          <Blueprint schema={schema} wrapper={BlockWrapper}>
            <DuckField name="name" />
          </Blueprint>
        </FormProvider>
      </DuckForm>
    </div>
  );
}
