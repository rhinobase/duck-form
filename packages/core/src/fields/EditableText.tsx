import { useThread } from "@fibr/react";
import { EditableText as RaftyEditableText } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { EditableTextProps } from "../types";

export function EditableTextField() {
	const { id } = useThread<EditableTextProps>();

	const { control } = useFormContext();

	return (
		<Controller
			name={id}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyEditableText
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
