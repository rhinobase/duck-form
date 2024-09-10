import type { FieldProps } from "./fieldProps";

export type ArrayProps = {
	type: "array";
	of: FieldProps;
	defaultValue?: unknown[] | (() => unknown[]);
	options?: {
		sortable?: boolean;
		layout?: "tags" | "grid";
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		list?: { title: string; value: any }[];
		editModal?: "dialog" | "fullscreen" | "popover";
	};
};
