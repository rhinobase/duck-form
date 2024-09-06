"use client";
import { Thread, useThread } from "@fibr/react";
import type { FieldProps, ObjectProps, Prettify } from "../types";

export function ObjectField<
	T extends Record<string, FieldProps> = Record<string, FieldProps>,
>() {
	const { id, fields } = useThread<Prettify<ObjectProps<T>>>();

	return (
		<div className="p-4 border border-secondary-200 space-y-6 dark:border-secondary-800 rounded-md">
			{Object.entries(fields).map(([fieldName, field]) => (
				<Thread key={fieldName} id={`${id}.${fieldName}`} {...field} />
			))}
		</div>
	);
}
