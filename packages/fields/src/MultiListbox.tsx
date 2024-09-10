import { useThread } from "@fibr/react";
import { Listbox as RaftyListbox } from "@rafty/corp";
import { Controller } from "react-hook-form";
import type { MultiListboxProps } from "../types";

export function MultiListboxField() {
	const { id, options } = useThread<MultiListboxProps>();

	return (
		<Controller
			name={id}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyListbox
					name={name}
					type="multi"
					items={options}
					onValueChange={onChange}
					value={value}
					isDisabled={disabled}
					ref={ref}
				/>
			)}
		/>
	);
}
