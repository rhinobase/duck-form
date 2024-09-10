import { useThread } from "@fibr/react";
import { PinInput as RaftyPinInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { PinInputProps } from "../types";

export function PinField() {
	const { id, length, placeholder } = useThread<PinInputProps>();
	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => {
				const formattedValue = Array.from<string>(value ?? []);

				return (
					<RaftyPinInput
						id={name}
						name={name}
						value={formattedValue}
						onValueChange={({ value }) => onChange(value)}
						placeholder={placeholder}
						length={length}
						disabled={disabled}
						ref={ref}
					/>
				);
			}}
		/>
	);
}
