import { useThread } from "@fibr/react";
import { CurrencyInput as RaftyCurrencyInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { CurrencyInputProps } from "../types";

export function CurrencyField() {
	const { id } = useThread<CurrencyInputProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field }) => <RaftyCurrencyInput {...field} />}
		/>
	);
}
