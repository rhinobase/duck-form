import { TagField as RaftyTagField } from "@rafty/ui";

export type TagFieldProps = {
  name?: string;
  type: "tag";
  defaultValue?: string[];
  value?: string[];
  onChange?: (value?: string[]) => void;
};

export function TagField({ type, onChange, ...props }: TagFieldProps) {
  return (
    <RaftyTagField
      {...props}
      id={props.name}
      onValueChange={({ value }) => onChange?.(value)}
    />
  );
}
