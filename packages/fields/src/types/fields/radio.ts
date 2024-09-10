import type { ReactNode } from "react";

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
