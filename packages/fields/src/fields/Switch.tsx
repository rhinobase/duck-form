import { Switch as RaftySwitch } from "@rafty/ui";
import type z from "zod";
import type { switchSchema } from "../validations";

export type SwitchProps = z.infer<typeof switchSchema>;

export function SwitchField({
  defaultValue,
  value,
  onChange,
  name,
}: SwitchProps) {
  return (
    <RaftySwitch
      id={name}
      defaultChecked={defaultValue}
      checked={value}
      onCheckedChange={onChange}
    />
  );
}
