"use client";
import { DuckField, useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import type { FieldProps } from "./fieldProps";

export type Promisify<T> = T | Promise<T>;

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & NonNullable<unknown>;

export type DefaultValue<T extends Record<string, FieldProps>> = {
	[K in keyof T]?: T[K] extends { blocks: Record<string, FieldProps> }
		? ObjectProps<T[K]["blocks"]>["defaultValue"]
		: // @ts-expect-error
			FieldPropsMap[T[K]["type"]]["defaultValue"];
};

export interface ObjectProps<
	T extends Record<string, FieldProps> = Record<string, FieldProps>,
> {
	type: "object";
	fields: T;
	defaultValue?: Prettify<DefaultValue<T>>;
	fieldsets?: { name: string; title: string }[];
	options?: {
		collapsible?: boolean;
		collapsed?: boolean;
		columns?: number;
	};
	fieldset?: string;
}

export function ObjectField<
	T extends Record<string, FieldProps> = Record<string, FieldProps>,
>() {
	const props = useField<Prettify<ObjectProps<T>>>();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	return (
		<div className="p-4 border border-secondary-200 space-y-6 dark:border-secondary-800 rounded-md">
			{Object.entries(props.fields).map(([fieldName, field]) => {
				const uniqueName = `${componentId}.${fieldName}`;

				return (
					<DuckField
						key={uniqueName}
						{...field}
						id={uniqueName}
						name={uniqueName}
					/>
				);
			})}
		</div>
	);
}
