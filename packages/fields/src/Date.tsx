"use client";
import { useThread } from "@fibr/react";
import { DatePicker as RaftyDatePicker } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { DateFieldProps } from "../types";

export function DateField() {
	const { id, placeholder } = useThread<DateFieldProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { onChange, value, ...props } }) => {
				const newValue = value ? value.substr(0, 10) : "";

				return (
					<RaftyDatePicker
						{...props}
						placeholder={placeholder}
						value={newValue}
						onValueChange={onChange}
					/>
				);
			}}
		/>
	);
}
