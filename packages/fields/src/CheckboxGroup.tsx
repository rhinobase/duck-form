"use client";
import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type CheckboxGroupProps = {
  type: "checkboxgroup";
  options: {
    value: string | number;
    label?: string;
  }[];
  defaultValue?: (string | number)[];
};

export function CheckboxGroupField() {
  const props = useField<CheckboxGroupProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  return (
    <div
      role="group"
      aria-labelledby="checkbox-group"
      className="flex w-full flex-col gap-1.5"
    >
      <Controller
        name={componentId}
        control={control}
        render={({ field: { name, onChange, ref, value, disabled } }) => (
          <>
            {props.options.map((option) => {
              const _id = `${name}.${option.value}`;

              return (
                <RaftyCheckbox
                  key={option.value}
                  id={_id}
                  name={_id}
                  checked={value?.includes(option.value)}
                  onCheckedChange={(checked) => {
                    let tmp = value ? [...value] : [];
                    if (checked) tmp.push(option.value);
                    else tmp = tmp.filter((value) => value !== option.value);

                    onChange(tmp);
                  }}
                  isDisabled={disabled}
                  isRequired={false}
                  ref={ref}
                >
                  {option.label ?? option.value}
                </RaftyCheckbox>
              );
            })}
          </>
        )}
      />
    </div>
  );
}
