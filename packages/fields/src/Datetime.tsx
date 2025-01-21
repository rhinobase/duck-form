import { InputField } from "@rafty/ui";
import dayjs from "dayjs";
import type { BlockType } from "./constants";

export type DatetimeFieldProps = {
  name?: string;
  type: BlockType.DATE_TIME;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function DatetimeField({
  type,
  value,
  onChange,
  ...props
}: DatetimeFieldProps) {
  const formattedValue = value
    ? dayjs(value).format("YYYY-MM-DDThh:mm")
    : undefined;

  return (
    <InputField
      {...props}
      id={props.name}
      type="datetime-local"
      placeholder={props.placeholder}
      value={formattedValue}
      onChange={(e) => onChange?.(dayjs(e.target.value).toISOString())}
    />
  );
}
