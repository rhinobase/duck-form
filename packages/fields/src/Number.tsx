"use client";
import { InputField as RaftyInputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { InputWrapper } from "./InputWrapper";

import type { InputField } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";

export type NumberProps = {
  type: "number";
  placeholder?: string;
  defaultValue?: number;
  inputMode?: "none" | "numeric" | "decimal";
  min?: InputField["min"];
  max?: InputField["max"];
};

export function NumberField() {
  const props = useField<NumberProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { register } = useFormContext();

  const { placeholder, inputMode, max, min } = props;

  return (
    <InputWrapper>
      <RaftyInputField
        id={componentId}
        type="number"
        step="1"
        placeholder={placeholder}
        inputMode={inputMode}
        min={min}
        max={max}
        {...register(componentId, { valueAsNumber: true })}
      />
    </InputWrapper>
  );
}
