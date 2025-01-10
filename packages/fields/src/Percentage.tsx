import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";

export type PercentageInputProps = {
  name?: string;
  type: "percentageInput";
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function PercentageField({ type, ...props }: PercentageInputProps) {
  return <RaftyPercentageInput {...props} id={props.name} />;
}
