"use client";
import { InputField as RaftyInputField } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { InputWrapper } from "./utils";

export type StringProps = {
  type: "string";
  inputType?: RaftyInputField["type"];
  placeholder?: string;
  defaultValue?: string;
  inputMode?: RaftyInputField["inputMode"];
  maxLength?: number;
  minLength?: number;
};

export function StringField() {
  const props = useField<StringProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { register } = useFormContext();

  return (
    <InputWrapper>
      <RaftyInputField
        id={componentId}
        type={props.inputType}
        placeholder={props.placeholder}
        inputMode={props.inputMode}
        {...register(componentId)}
      />
    </InputWrapper>
  );
}
