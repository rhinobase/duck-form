"use client";
import { useThread } from "@fibr/react";
import { InputField as RaftyInputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import type { StringProps } from "../types";
import { InputWrapper } from "./utils";

export function StringField() {
	const {
		id,
		placeholder,
		inputType = "text",
		inputMode,
	} = useThread<StringProps>();

	const { register } = useFormContext();

	return (
		<InputWrapper>
			<RaftyInputField
				id={id}
				type={inputType}
				placeholder={placeholder}
				inputMode={inputMode}
				{...register(id)}
			/>
		</InputWrapper>
	);
}
