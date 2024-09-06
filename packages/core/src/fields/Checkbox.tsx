"use client";
import { useThread } from "@fibr/react";
import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { CheckboxProps } from "../types";

export function CheckboxField() {
	const { id } = useThread<CheckboxProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyCheckbox
					id={name}
					name={name}
					checked={value}
					onCheckedChange={onChange}
					isDisabled={disabled}
					ref={ref}
				/>
			)}
		/>
	);
}
