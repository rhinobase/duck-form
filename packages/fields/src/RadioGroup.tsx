import {
  RadioGroupItem,
  RadioGroup as RaftyRadioGroup,
  classNames,
} from "@rafty/ui";
import type { ReactNode } from "react";
import type { FieldType } from "./constants";

export type RadioGroupProps = {
  name?: string;
  type: FieldType.RADIO;
  options: {
    value: string | number;
    label?: ReactNode;
    description?: string;
  }[];
  orientaion?: "horizontal" | "vertical";
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function RadioGroupField({
  type,
  options,
  orientaion = "vertical",
  onChange,
  ...props
}: RadioGroupProps) {
  return (
    <RaftyRadioGroup
      {...props}
      id={props.name}
      onValueChange={onChange}
      className={classNames(
        orientaion === "horizontal" ? "flex-row gap-4" : "flex-col",
        "[&>div]:w-full xl:[&>div]:w-max"
      )}
    >
      {options.map((option, index) => {
        const _id = `${props.name}.${option.value}`;
        if (option.description)
          return (
            <div key={`${index}-${props.name}`} className="flex items-start">
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
            key={`${index}-${props.name}`}
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
