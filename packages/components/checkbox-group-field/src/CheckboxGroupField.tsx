import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import type { checkboxGroupSchema } from "@rhinobase/shared";
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
  return (
    <div
      id={name}
      // biome-ignore lint/a11y/useSemanticElements: <explanation>
      role="group"
      aria-labelledby="checkbox-group"
      className="flex w-full flex-col gap-1.5"
    >
      {options.map((option, index) => {
        const _id = `${name}.${option.value}`;

        return (
          <RaftyCheckbox
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={index}
            id={_id}
            name={_id}
            defaultChecked={defaultValue?.includes(option.value)}
            checked={value?.includes(option.value)}
            onCheckedChange={(checked) => {
              let tmp = value ? [...value] : [];
              if (checked) tmp.push(option.value);
              else tmp = tmp.filter((value) => value !== option.value);

              onChange?.(tmp);
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
