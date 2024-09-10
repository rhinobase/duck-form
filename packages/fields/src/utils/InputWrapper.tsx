"use client";
import {
	InputGroup,
	LeftAddon,
	Prefix,
	RightAddon,
	Suffix,
	classNames,
} from "@rafty/ui";
import { useField } from "duck-form";
import type { PropsWithChildren, ReactNode } from "react";

export type InputWrapperProps = {
	size?: "sm" | "md" | "lg";
	prefix?: ReactNode;
	suffix?: ReactNode;
	prefixIcon?: string;
	suffixIcon?: string;
};

const addonTextClasses = {
	size: {
		sm: "text-xs",
		md: "text-sm",
		lg: "text-base",
	},
};

export type InputWrapper = PropsWithChildren;

export function InputWrapper({ children }: InputWrapper) {
	const {
		prefixIcon,
		prefix,
		suffixIcon,
		size = "md",
		suffix,
	} = useField<InputWrapperProps>();

	return (
		<InputGroup size={size} className="w-full">
			{prefix && (
				<LeftAddon
					className={classNames(
						"text-secondary-600 dark:text-secondary-400 font-medium",
						addonTextClasses.size[size],
					)}
				>
					{prefix}
				</LeftAddon>
			)}
			{prefixIcon && (
				<Prefix>
					<span className="material-icons-round">{prefixIcon}</span>
				</Prefix>
			)}
			{children}
			{suffixIcon && (
				<Suffix>
					<span className="material-icons-round">{suffixIcon}</span>
				</Suffix>
			)}
			{suffix && (
				<RightAddon
					className={classNames(
						"text-secondary-600 dark:text-secondary-400 font-medium",
						addonTextClasses.size[size],
					)}
				>
					{suffix}
				</RightAddon>
			)}
		</InputGroup>
	);
}
