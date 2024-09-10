"use client";
import { PercentageInput as RaftyPercentageInput } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type PercentageInputProps = {
	type: "percentageInput";
	defaultValue?: string;
};

export function PercentageField() {
	const props = useField<PercentageInputProps>();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	const { control } = useFormContext();

	return (
		<Controller
			name={componentId}
			control={control}
			render={({ field }) => <RaftyPercentageInput {...field} />}
		/>
	);
}
