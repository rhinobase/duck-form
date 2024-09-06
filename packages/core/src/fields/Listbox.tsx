import { useThread } from "@fibr/react";
import { Listbox as RaftyListbox } from "@rafty/corp";
import { Controller } from "react-hook-form";
import type { ListboxProps } from "../types";

export function ListboxField() {
	const { id, options } = useThread<ListboxProps>();

	return (
		<Controller
			name={id}
			render={({ field: { name, onChange, ref, value, disabled } }) => (
				<RaftyListbox
					name={name}
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
