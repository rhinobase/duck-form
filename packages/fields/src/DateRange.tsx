import { RangePicker as RaftyRangePicker } from "@rafty/ui";

export type DateRangeFieldProps = {
  name?: string;
  type: "dateRange";
  placeholder?: {
    from?: string;
    to?: string;
  };
  defaultValue?: [string] | [string, string];
  value?: [string] | [string, string];
  onChange?: (value?: [string] | [string, string]) => void;
};

export function DateRangeField({
  type,
  onChange,
  ...props
}: DateRangeFieldProps) {
  return (
    <RaftyRangePicker
      {...props}
      id={props.name}
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
