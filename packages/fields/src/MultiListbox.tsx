import { Listbox as RaftyListbox } from "@rafty/corp";
import type { BlockType } from "./constants";

export type MultiListboxProps = {
  name?: string;
  type: BlockType.MULTI_LISTBOX;
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
