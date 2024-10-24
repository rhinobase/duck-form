"use client";
import { Switch as RaftySwitch } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type SwitchProps = {
  type: "switch";
  defaultValue?: boolean;
};

export function SwitchField() {
  const props = useField<SwitchProps>();

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

  const { control } = useFormContext();

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { name, onChange, value, ...field } }) => (
        <RaftySwitch
          {...field}
          id={name}
          name={name}
          checked={value}
          onCheckedChange={onChange}
          onPointerDownCapture={(event) =>
            isDebug && stopEventPropagation(event)
          }
          onKeyDownCapture={(event) => isDebug && stopEventPropagation(event)}
        />
      )}
    />
  );
}
