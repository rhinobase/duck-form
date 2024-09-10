"use client";
import { useThread } from "@fibr/react";
import { Textarea as RaftyTextarea } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import type { TextareaProps } from "../types";

export function TextareaField() {
	const { id, placeholder } = useThread<TextareaProps>();

	const { register } = useFormContext();

	return <RaftyTextarea id={id} placeholder={placeholder} {...register(id)} />;
}
