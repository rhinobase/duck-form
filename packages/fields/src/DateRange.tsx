"use client";
import { useThread } from "@fibr/react";
import { RangePicker as RaftyRangePicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { DateRangeFieldProps } from "../types";

export function DateRangeField() {
	const { id, placeholder } = useThread<DateRangeFieldProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, disabled, value, onChange, ref } }) => (
				<RaftyRangePicker
					name={name}
					placeholder={placeholder}
					disabled={disabled}
					value={value}
					onValueChange={onChange}
					ref={ref}
				/>
			)}
		/>
	);
}
