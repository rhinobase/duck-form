import { Checkbox as RaftyCheckbox } from "@rafty/ui/checkbox";
import { type checkboxGroupSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type CheckboxGroupProps = z.infer<typeof checkboxGroupSchema>;

export function CheckboxGroupField({
  name,
  options,
  defaultValue,
  value,
  onChange,
}: CheckboxGroupProps) {
  const props = {
    name,
    options,
    defaultValue,
    value,
    onChange,
  };

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
      ).map((option, index) => {
        const _id = `${fieldProps.name}.${option.value}`;

        return (
          <RaftyCheckbox
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            id={_id}
            name={_id}
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
        );
      })}
    </div>
  );
}
