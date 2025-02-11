import {
  RadioGroupItem,
  RadioGroup as RaftyRadioGroup,
  classNames,
} from "@rafty/ui";
import { evalProp, type radioGroupSchema } from "@rhinobase/shared";
import React from "react";

export type RadioGroupProps = typeof radioGroupSchema.infer;

export function RadioGroupField({
  options,
  orientation = { type: "literal", value: "vertical" },
  onChange,
  defaultValue,
  name,
  value,
}: RadioGroupProps) {
  const props = {
    options,
    orientation,
    onChange,
    defaultValue,
    name,
    value,
  };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  return (
    <RaftyRadioGroup
      id={fieldProps.name}
      defaultValue={fieldProps.defaultValue}
      value={fieldProps.value}
      orientation={fieldProps.orientation}
      onValueChange={fieldProps.onChange}
      className={classNames(
        fieldProps.orientation === "horizontal" ? "flex-row gap-4" : "flex-col",
        "[&>div]:w-full xl:[&>div]:w-max"
      )}
    >
      {(
        fieldProps.options as {
          value: string | number;
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          label?: any;
          description?: string | undefined;
        }[]
      ).map((option, index) => {
        const _id = `${fieldProps.name}.${option.value}`;
        if (option.description)
          return (
            <div
              key={`${index}-${fieldProps.name}`}
              className="flex items-start"
            >
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
            key={`${index}-${fieldProps.name}`}
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
