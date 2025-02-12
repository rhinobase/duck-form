import { Switch as RaftySwitch } from "@rafty/ui/switch";
import { type switchGroupSchema, useEvaluate } from "@rhinobase/shared";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type SwitchGroupProps = z.infer<typeof switchGroupSchema>;

export function SwitchGroupField() {
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();
  const { name, options, value, onChange, defaultValue } =
    useField<SwitchGroupProps>();

  const props = { name, options, defaultValue, value, onChange };

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

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
            name={`${componentId}.${index}`}
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
