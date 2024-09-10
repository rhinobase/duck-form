"use client";
import { Textarea as RaftyTextarea } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFormContext } from "react-hook-form";

export type TextareaProps = {
	type: "textarea";
	placeholder?: string;
	defaultValue?: string;
};

export function TextareaField() {
	const props = useField<TextareaProps>();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	const { register } = useFormContext();

	return (
		<RaftyTextarea
			id={componentId}
			placeholder={props.placeholder}
			{...register(componentId)}
		/>
	);
}
