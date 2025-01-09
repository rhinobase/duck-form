import { Listbox as RaftyListbox } from "@rafty/corp";

export type ListboxProps = {
  name?: string;
  type: "listbox";
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
