import { Calendar as RaftyCalendar } from "@rafty/ui";
import type { BlockType } from "./constants";

export type CalendarProps = {
  name?: string;
  type: BlockType.CALENDAR;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function CalendarField({ type, onChange, ...props }: CalendarProps) {
  return (
    <RaftyCalendar
      {...props}
      id={props.name}
      onValueChange={onChange}
      className="w-max"
    />
  );
}
