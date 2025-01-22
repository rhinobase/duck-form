import { Calendar as RaftyCalendar } from "@rafty/ui";
import type z from "zod";
import type { calendarSchema } from "../validations";

export type CalendarProps = z.infer<typeof calendarSchema>;

export function CalendarField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: CalendarProps) {
  return (
    <RaftyCalendar
      id={name}
      value={value}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onValueChange={onChange}
      className="w-max"
    />
  );
}
