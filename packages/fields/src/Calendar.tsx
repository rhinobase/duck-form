import { Calendar as RaftyCalendar } from "@rafty/ui";

export type CalendarProps = {
  name?: string;
  type: "calendar";
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function CalendarField({ type, onChange, ...props }: CalendarProps) {
  return <RaftyCalendar {...props} id={props.name} onValueChange={onChange} />;
}
