import { ColorPicker as RaftyColorPicker, useBoolean } from "@rafty/ui";
import type z from "zod";
import type { colorPickerSchema } from "../validations";

export type ColorPickerProps = z.infer<typeof colorPickerSchema>;

export function ColorPickerField({
  defaultValue,
  value,
  onChange,
  name,
}: ColorPickerProps) {
  const [isOpen, setOpen] = useBoolean();

  return (
    <RaftyColorPicker
      id={name}
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
