"use client";
import {
	FieldWrapper as RaftyFieldWrapper,
	type ValueOrFunction,
	classNames,
	getValue,
} from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { type PropsWithChildren, useEffect, useId, useMemo } from "react";

export type FieldWrapperProps = {
	label?: string;
	description?: string;
	primary?: boolean;
	unique?: boolean;
	required?: ValueOrFunction;
	disabled?: ValueOrFunction;
	readonly?: ValueOrFunction;
	hidden?: ValueOrFunction;
	orientation?: RaftyFieldWrapper["orientation"];
	onChange?: () => void;
};

export type FieldWrapper = PropsWithChildren<{
	className?: RaftyFieldWrapper["className"];
}>;

export function FieldWrapper({ className, children }: FieldWrapper) {
	const props = useField<FieldWrapperProps>();
	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const {
		disabled,
		required,
		readonly,
		hidden,
		orientation,
		label,
		description,
		onChange,
	} = props;

	const componentId = customId ?? autoId;

	useEffect(() => {
		onChange?.();
	}, [onChange]);

	return (
		<RaftyFieldWrapper
			name={componentId}
			isDisabled={disabled}
			isRequired={required}
			isReadOnly={readonly}
			className={classNames(
				getValue(hidden) && "hidden",
				"relative [&>div>div]:w-full",
				className,
			)}
			orientation={orientation}
			label={label}
			description={description}
		>
			{children}
		</RaftyFieldWrapper>
	);
}
