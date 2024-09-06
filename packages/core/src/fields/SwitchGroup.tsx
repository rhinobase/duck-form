"use client";
import { useThread } from "@fibr/react";
import { Switch as RaftySwitch } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { SwitchGroupProps } from "../types";

export function SwitchGroupField() {
	const { id, options } = useThread<SwitchGroupProps>();

	const { control } = useFormContext();

	return (
		<div className="flex w-full flex-col gap-1.5">
			<Controller
				name={id}
				control={control}
				render={({ field: { name, onChange, ref, value, disabled } }) => (
					<>
						{options.map((option) => {
							const _id = `${name}.${option.value}`;

							return (
								<RaftySwitch
									key={option.value}
									id={_id}
									name={_id}
									checked={value?.includes(option.value)}
									onCheckedChange={(checked) => {
										let tmp = value ? [...value] : [];
										if (checked) tmp.push(option.value);
										else tmp = tmp.filter((value) => value !== option.value);

										onChange(tmp);
									}}
									isDisabled={disabled}
									ref={ref}
								>
									{option.label ?? option.value}
								</RaftySwitch>
							);
						})}
					</>
				)}
			/>
		</div>
	);
}
