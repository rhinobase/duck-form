import type { ReactNode } from "react";

export type InputWrapperProps = {
	size?: "sm" | "md" | "lg";
	prefix?: ReactNode;
	suffix?: ReactNode;
	prefixIcon?: string;
	suffixIcon?: string;
};
