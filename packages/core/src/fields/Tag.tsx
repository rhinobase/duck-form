import { useThread } from "@fibr/react";
import { TagField as RaftyTagField } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { TagFieldProps } from "../types";

export function TagField() {
	const { id } = useThread<TagFieldProps>();
	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, value, ref, disabled } }) => (
				<RaftyTagField
					id={name}
					name={name}
					value={value}
					onValueChange={onChange}
					disabled={disabled}
					ref={ref}
				/>
			)}
		/>
	);
}
