"use client";
import {
	RadioGroupItem,
	RadioGroup as RaftyRadioGroup,
	classNames,
} from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { type ReactNode, useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type RadioGroupProps = {
	type: "radio";
	options: {
		value: string | number;
		label?: ReactNode;
		description?: string;
	}[];
	defaultValue?: string;
	orientaion?: "horizontal" | "vertical";
};

export function RadioGroupField() {
	const props = useField<RadioGroupProps>();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	const { options, orientaion = "vertical" } = props;

	const { control } = useFormContext();

	return (
		<Controller
			name={componentId}
			control={control}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyRadioGroup
					id={name}
					value={value ?? undefined}
					onValueChange={onChange}
					isDisabled={disabled}
					ref={ref}
					className={classNames(
						orientaion === "horizontal" ? "flex-row gap-4" : "flex-col",
						"[&>div]:w-full xl:[&>div]:w-max",
					)}
				>
					{options.map((option) => {
						const _id = `${name}.${option.value}`;
						if (option.description)
							return (
								<div key={option.value} className="flex items-start">
									<RadioGroupItem id={_id} value={String(option.value)} />
									<label
										htmlFor={_id}
										className="flex select-none flex-col gap-0.5 pl-2"
									>
										<span className="text-secondary-800 dark:text-secondary-200 text-sm font-medium leading-snug">
											{option.label ?? option.value}
										</span>
										<span className="text-secondary-600 dark:text-secondary-400 text-sm leading-tight">
											{option.description}
										</span>
									</label>
								</div>
							);
						return (
							<RadioGroupItem
								key={option.value}
								id={_id}
								value={String(option.value)}
							>
								{option.label ?? option.value}
							</RadioGroupItem>
						);
					})}
				</RaftyRadioGroup>
			)}
		/>
	);
}
