import { Listbox as RaftyListbox } from "@rafty/corp";
import type { FieldType } from "./constants";

export type ListboxProps = {
  name?: string;
  type: FieldType.LISTBOX;
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function ListboxField({ type, onChange, ...props }: ListboxProps) {
  return (
    <RaftyListbox {...props} items={props.options} onValueChange={onChange} />
  );
}
