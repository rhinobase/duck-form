import { Rating as RaftyRating } from "@rafty/ui";
import type { BlockType } from "./constants";

export type RatingProps = {
  name?: string;
  type: BlockType.RATING;
  count: number;
  allowHalf?: boolean;
  defaultValue?: number;
  value?: number;
  onChange?: (value?: number) => void;
};

export function RatingField({ type, onChange, ...props }: RatingProps) {
  return <RaftyRating {...props} id={props.name} onValueChange={onChange} />;
}
