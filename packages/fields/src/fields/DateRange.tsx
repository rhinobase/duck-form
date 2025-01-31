import { RangePicker as RaftyRangePicker } from "@rafty/ui";
import type z from "zod";
import type { dateRangeSchema } from "../validations";

export type DateRangeFieldProps = z.infer<typeof dateRangeSchema>;

export function DateRangeField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: DateRangeFieldProps) {
  return (
    <RaftyRangePicker
      id={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      value={value}
      onValueChange={(value) => {
        const val: string[] = [];

        if (value) {
          value.map((item) => {
            if (item) val.push(item);
          });
        }
        // @ts-expect-error
        onChange?.(val.length > 0 ? val : undefined);
      }}
    />
  );
}
