"use client";
import { useThread } from "@fibr/react";
import { Select as RaftySelect, SelectItem } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import type { SelectProps } from "../types";

export function SelectField() {
	const { id, placeholder, options } = useThread<SelectProps>();

	const { register } = useFormContext();

	return (
		<RaftySelect id={id} placeholder={placeholder} {...register(id)}>
			{options.map(({ value, label }) => (
				<SelectItem key={value} value={value}>
					{label ?? value}
				</SelectItem>
			))}
		</RaftySelect>
	);
}
