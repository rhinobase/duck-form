import { RadioGroupItem, RadioGroup as RaftyRadioGroup } from "@rafty/ui/radio";
import { classNames } from "@rafty/ui/utils";
import { type radioGroupSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type RadioGroupProps = z.infer<typeof radioGroupSchema>;

export function RadioGroupField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const {
    options,
    orientation = { type: "literal", value: "vertical" },
    onChange,
    defaultValue,
    name,
    value,
  } = useField<RadioGroupProps>();

  const props = {
    options,
    orientation,
    onChange,
    defaultValue,
    name,
    value,
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
    <RaftyRadioGroup
      {...fieldProps}
      name={componentId}
      id={fieldProps.name}
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
