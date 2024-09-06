import { useThread } from "@fibr/react";
import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { PercentageInputProps } from "../types";

export function PercentageField() {
	const { id } = useThread<PercentageInputProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field }) => <RaftyPercentageInput {...field} />}
		/>
	);
}
