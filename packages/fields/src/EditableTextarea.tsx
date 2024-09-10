import { useThread } from "@fibr/react";
import { EditableTextarea as RaftyEditableTextarea } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { EditableTextareaProps } from "../types";

export function EditableTextareaField() {
	const { id } = useThread<EditableTextareaProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyEditableTextarea
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
