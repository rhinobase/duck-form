import { Switch as RaftySwitch } from "@rafty/ui/switch";
import { type switchGroupSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type SwitchGroupProps = z.infer<typeof switchGroupSchema>;

export function SwitchGroupField({
  name,
  options,
  value,
  onChange,
  defaultValue,
}: SwitchGroupProps) {
  const props = { name, options, defaultValue, value, onChange };

  const fieldProps = useEvaluate(props);

  return (
    <div id={fieldProps.name} className="flex w-full flex-col gap-1.5">
      {(
        fieldProps.options as {
          value: string | number;
          label?: string | undefined;
        }[]
      ).map((option, index) => {
        const _id = `${fieldProps.name}.${option.value}`;

        return (
          <RaftySwitch
            key={`${index}-${fieldProps.name}`}
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
          >
            {option.label ?? option.value}
          </RaftySwitch>
        );
      })}
    </div>
  );
}
