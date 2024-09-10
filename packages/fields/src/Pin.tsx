"use client";
import { PinInput as RaftyPinInput } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type PinInputProps = {
	type: "pin";
	length: number;
	placeholder?: string;
	defaultValue?: string[];
};

export function PinField() {
	const props = useField<PinInputProps>();
	const { control } = useFormContext();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	return (
		<Controller
			name={componentId}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => {
				const formattedValue = Array.from<string>(value ?? []);

				return (
					<RaftyPinInput
						id={name}
						name={name}
						value={formattedValue}
						onValueChange={({ value }) => onChange(value)}
						placeholder={props.placeholder}
						length={props.length}
						disabled={disabled}
						ref={ref}
					/>
				);
			}}
		/>
	);
}
