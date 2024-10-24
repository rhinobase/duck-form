"use client";
import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type SelectProps = {
  type: "select";
  placeholder?: string;
  defaultValue?: string | number;
  options: {
    value: string | number;
    label?: string;
  }[];
};

export function SelectField() {
  const props = useField<SelectProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const { isDebug } = useDebug() ?? {
    isDebug: false,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { register } = useFormContext();

  return (
    <RaftySelect
      id={componentId}
      placeholder={props.placeholder}
      className="w-full"
      {...register(componentId)}
      onPointerDownCapture={(event) => isDebug && stopEventPropagation(event)}
      onKeyDownCapture={(event) => isDebug && stopEventPropagation(event)}
      onClickCapture={(event) => isDebug && stopEventPropagation(event)}
    >
      {props.options.map(({ value, label }, index) => (
        <SelectItem key={`${index}-${componentId}`} value={value}>
          {label ?? value}
        </SelectItem>
      ))}
    </RaftySelect>
  );
}
