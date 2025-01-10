import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import type { FieldType } from "./constants";

export type PercentageInputProps = {
  name?: string;
  type: FieldType.PERCENTAGE_INPUT;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function PercentageField({ type, ...props }: PercentageInputProps) {
  return <RaftyPercentageInput {...props} id={props.name} />;
}
