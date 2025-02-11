import { Switch as RaftySwitch } from "@rafty/ui";
import { evalProp, type switchGroupSchema } from "@rhinobase/shared";
import React from "react";

export type SwitchGroupProps = typeof switchGroupSchema.infer;

export function SwitchGroupField({
  name,
  options,
  value,
  onChange,
  defaultValue,
}: SwitchGroupProps) {
  const props = { name, options, defaultValue, value, onChange };

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
