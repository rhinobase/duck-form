import {
  SegmentedControl as RaftySegmentedControl,
  SegmentedControlItem,
} from "@rafty/ui";
import type z from "zod";
import type { segmentedControlSchema } from "../validations";

export type SegmentedControlProps = z.infer<typeof segmentedControlSchema>;

export function SegmentedControlField({
  onChange,
  options,
  defaultValue,
  name,
  value,
}: SegmentedControlProps) {
  return (
    <RaftySegmentedControl
      id={name}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onChange}
    >
      {options.map(({ value, label }, index) => (
        <SegmentedControlItem key={`${index}-${name}`} value={value}>
          {label ?? value}
        </SegmentedControlItem>
      ))}
    </RaftySegmentedControl>
  );
}
