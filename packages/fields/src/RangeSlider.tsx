"use client";
import { useThread } from "@fibr/react";
import {
	Slider as RaftySlider,
	SliderRange,
	SliderThumb,
	SliderTrack,
} from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { RangeSliderProps } from "../types";

export function RangeSliderField() {
	const { id, ...restDataProps } = useThread<RangeSliderProps>();
	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftySlider
					{...restDataProps}
					name={name}
					value={value}
					disabled={disabled}
					onValueChange={(value) => onChange(value.splice(0, 2))}
					ref={ref}
				>
					<SliderTrack>
						<SliderRange />
					</SliderTrack>
					<SliderThumb />
					<SliderThumb />
				</RaftySlider>
			)}
		/>
	);
}
