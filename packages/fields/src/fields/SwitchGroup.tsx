import { Switch as RaftySwitch } from "@rafty/ui";
import type z from "zod";
import type { switchGroupSchema } from "../validations";

export type SwitchGroupProps = z.infer<typeof switchGroupSchema>;

export function SwitchGroupField({
  name,
  options,
  value,
  onChange,
  defaultValue,
}: SwitchGroupProps) {
  return (
    <div id={name} className="flex w-full flex-col gap-1.5">
      {options.map((option, index) => {
        const _id = `${name}.${option.value}`;

        return (
          <RaftySwitch
            key={`${index}-${name}`}
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
          >
            {option.label ?? option.value}
          </RaftySwitch>
        );
      })}
    </div>
  );
}
