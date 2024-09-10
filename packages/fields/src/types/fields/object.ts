import type { Prettify } from "../utils";
import type { DefaultValue } from "./defaultValue";
import type { FieldProps } from "./fieldProps";

export interface ObjectProps<
	T extends Record<string, FieldProps> = Record<string, FieldProps>,
> {
	type: "object";
	fields: T;
	defaultValue?: Prettify<DefaultValue<T>>;
	fieldsets?: { name: string; title: string }[];
	options?: {
		collapsible?: boolean;
		collapsed?: boolean;
		columns?: number;
	};
	fieldset?: string;
}
