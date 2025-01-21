import { Textarea as RaftyTextarea } from "@rafty/ui";
import type { BlockType } from "./constants";

export type TextareaProps = {
  name?: string;
  type: BlockType.TEXTAREA;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function TextareaField({ type, onChange, ...props }: TextareaProps) {
  return (
    <RaftyTextarea
      {...props}
      id={props.name}
      onChange={(event) => onChange?.(event.target.value)}
    />
  );
}
