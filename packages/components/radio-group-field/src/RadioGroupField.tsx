import {
  RadioGroupItem,
  RadioGroup as RaftyRadioGroup,
  classNames,
} from "@rafty/ui";
import type { radioGroupSchema } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type RadioGroupProps = z.infer<typeof radioGroupSchema>;

export function RadioGroupField({
  options,
  orientation = "vertical",
  onChange,
  defaultValue,
  name,
  value,
}: RadioGroupProps) {
  return (
    <RaftyRadioGroup
      id={name}
      defaultValue={defaultValue}
      value={value}
      orientation={orientation}
      onValueChange={onChange}
      className={classNames(
        orientation === "horizontal" ? "flex-row gap-4" : "flex-col",
        "[&>div]:w-full xl:[&>div]:w-max"
      )}
    >
      {options.map((option, index) => {
        const _id = `${name}.${option.value}`;
        if (option.description)
          return (
            <div key={`${index}-${name}`} className="flex items-start">
              <RadioGroupItem id={_id} value={String(option.value)} />
              <label
                htmlFor={_id}
                className="flex select-none flex-col gap-0.5 pl-2"
              >
                <span className="text-secondary-800 dark:text-secondary-200 text-sm font-medium leading-snug">
                  {option.label ?? option.value}
                </span>
                <span className="text-secondary-600 dark:text-secondary-400 text-xs leading-tight">
                  {option.description}
                </span>
              </label>
            </div>
          );
        return (
          <RadioGroupItem
            key={`${index}-${name}`}
            id={_id}
            value={String(option.value)}
          >
            {option.label ?? option.value}
          </RadioGroupItem>
        );
      })}
    </RaftyRadioGroup>
  );
}
