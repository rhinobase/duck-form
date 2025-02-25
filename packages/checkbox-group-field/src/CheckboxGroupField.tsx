import { Checkbox as RaftyCheckbox } from "@rafty/ui/checkbox";
import { type checkboxGroupSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type CheckboxGroupProps = z.infer<typeof checkboxGroupSchema>;

export function CheckboxGroupField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, options, defaultValue, value, onChange } =
    useField<CheckboxGroupProps>();

  const props = {
    name,
    options,
    defaultValue,
    value,
    onChange,
  };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const fieldProps = useEvaluate(props);

  return (
    <div
      id={fieldProps.name}
      role="group"
      aria-labelledby="checkbox-group"
      className="flex w-full flex-col gap-1.5"
    >
      {(
        fieldProps.options as {
          value: string | number;
          label?: string | undefined;
        }[]
      ).map((option, index) => (
        <RaftyCheckbox
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={index}
          id={`${fieldProps.name}.${option.value}`}
          name={`${componentId}.${index}`}
          defaultChecked={fieldProps.defaultValue?.includes(option.value)}
          checked={fieldProps.value?.includes(option.value)}
          onCheckedChange={(checked) => {
            let tmp = fieldProps.value ? [...fieldProps.value] : [];
            if (checked) tmp.push(option.value);
            else tmp = tmp.filter((value) => value !== option.value);

            fieldProps.onChange?.(tmp);
          }}
          isRequired={false}
        >
          {option.label ?? option.value}
        </RaftyCheckbox>
      ))}
    </div>
  );
}
