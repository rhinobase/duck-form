import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import type { BlockType } from "../constants";

export type CurrencyInputProps = {
  name?: string;
  type: BlockType.CURRENCY_INPUT;
  defaultValue?: string;
  currencyCode?: string;
  value?: string;
  onChange?: (value?: string) => void;
};

export function CurrencyField({ type, ...props }: CurrencyInputProps) {
  return <RaftyCurrencyInput {...props} id={props.name} />;
}
