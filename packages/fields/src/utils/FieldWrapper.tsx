"use client";
import { useThread } from "@fibr/react";
import {
	FieldWrapper as RaftyFieldWrapper,
	classNames,
	getValue,
} from "@rafty/ui";
import { type PropsWithChildren, useEffect } from "react";
import type { FieldWrapperProps } from "../../types";

export type FieldWrapper = PropsWithChildren<{
	className?: RaftyFieldWrapper["className"];
}>;

export function FieldWrapper({ className, children }: FieldWrapper) {
	const {
		id,
		disabled,
		required,
		readonly,
		hidden,
		orientation,
		label,
		description,
		onChange,
	} = useThread<FieldWrapperProps>();

	useEffect(() => {
		onChange?.();
	}, [onChange]);

	return (
		<RaftyFieldWrapper
			name={id}
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
