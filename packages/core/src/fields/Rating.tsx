import { useThread } from "@fibr/react";
import { Rating as RaftyRating } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { RatingProps } from "../types";

export function RatingField() {
	const { id, count } = useThread<RatingProps>();
	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyRating
					id={name}
					name={name}
					count={count}
					value={value}
					onValueChange={onChange}
					disabled={disabled}
					ref={ref}
				/>
			)}
		/>
	);
}
