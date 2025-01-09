import { ColorPicker as RaftyColorPicker, useBoolean } from "@rafty/ui";

export type ColorPickerProps = {
  name?: string;
  type: "colorPicker";
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function ColorPickerField({
  type,
  defaultValue,
  value,
  onChange,
  ...props
}: ColorPickerProps) {
  const [isOpen, setOpen] = useBoolean();

  return (
    <RaftyColorPicker
      {...props}
      id={props.name}
      open={isOpen}
      onOpenChange={({ open }) => setOpen(open)}
      defaultValue={defaultValue}
      value={value}
      onValueChange={({ valueAsString }: { valueAsString: string }) =>
        onChange?.(valueAsString)
      }
    />
  );
}
