import {
  SegmentedControl as RaftySegmentedControl,
  SegmentedControlItem,
} from "@rafty/ui";
import type { BlockType } from "../constants";

export type SegmentedControlProps = {
  name?: string;
  type: BlockType.SEGMENTED_CONTROL;
  options: {
    value: string;
    label?: string;
  }[];
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function SegmentedControlField({
  type,
  onChange,
  options,
  ...props
}: SegmentedControlProps) {
  return (
    <RaftySegmentedControl {...props} id={props.name} onValueChange={onChange}>
      {options.map(({ value, label }, index) => (
        <SegmentedControlItem key={`${index}-${props.name}`} value={value}>
          {label ?? value}
        </SegmentedControlItem>
      ))}
    </RaftySegmentedControl>
  );
}
