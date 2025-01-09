import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";

export type CurrencyInputProps = {
  name?: string;
  type: "currencyInput";
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function CurrencyField({ type, ...props }: CurrencyInputProps) {
  return <RaftyCurrencyInput {...props} id={props.name} />;
}
