import { useThread } from "@fibr/react";
import {
	SegmentedControl as RaftySegmentedControl,
	SegmentedControlItem,
} from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { SegmentedControlProps } from "../types";

export function SegmentedControlField() {
	const { id, options } = useThread<SegmentedControlProps>();
	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftySegmentedControl
					id={name}
					name={name}
					value={value}
					onValueChange={onChange}
					disabled={disabled}
					ref={ref}
				>
					{options.map(({ value, label }) => (
						<SegmentedControlItem key={value} value={value}>
							{label ?? value}
						</SegmentedControlItem>
					))}
				</RaftySegmentedControl>
			)}
		/>
	);
}
