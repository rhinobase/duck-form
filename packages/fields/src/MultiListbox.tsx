import { Listbox as RaftyListbox } from "@rafty/corp";

export type MultiListboxProps = {
  name?: string;
  type: "multiListbox";
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string[];
  value?: string[];
  onChange?: (value?: string[]) => void;
};

export function MultiListboxField({
  type,
  options,
  onChange,
  ...props
}: MultiListboxProps) {
  return (
    <RaftyListbox
      {...props}
      type="multi"
      items={options}
      onValueChange={onChange}
    />
  );
}
