import { Switch as RaftySwitch } from "@rafty/ui";
import type { FieldType } from "./constants";

export type SwitchGroupProps = {
  name?: string;
  type: FieldType.SWITCH_GROUP;
  options: {
    value: string | number;
    label?: string;
  }[];
  defaultValue?: (string | number)[];
  value?: (string | number)[];
  onChange?: (value?: (string | number)[]) => void;
};

export function SwitchGroupField({
  type,
  name,
  options,
  defaultValue,
  value,
  onChange,
  ...props
}: SwitchGroupProps) {
  return (
    <div id={name} className="flex w-full flex-col gap-1.5">
      {options.map((option, index) => {
        const _id = `${name}.${option.value}`;

        return (
          <RaftySwitch
            {...props}
            key={`${index}-${name}`}
            id={_id}
            name={_id}
            checked={value?.includes(option.value)}
            onCheckedChange={(checked) => {
              let tmp = value ? [...value] : [];
              if (checked) tmp.push(option.value);
              else tmp = tmp.filter((value) => value !== option.value);

              onChange?.(tmp);
            }}
          >
            {option.label ?? option.value}
          </RaftySwitch>
        );
      })}
    </div>
  );
}
