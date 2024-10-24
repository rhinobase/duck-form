import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useDebug } from "./providers";
import { stopEventPropagation } from "./utils";

export type CurrencyInputProps = {
  type: "currencyInput";
  defaultValue?: string;
};

export function CurrencyField() {
  const props = useField<CurrencyInputProps>();

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
      render={({ field }) => (
        <RaftyCurrencyInput
          {...field}
          onPointerDownCapture={(event) =>
            isDebug && stopEventPropagation(event)
          }
          onKeyDownCapture={(event) => isDebug && stopEventPropagation(event)}
        />
      )}
    />
  );
}
