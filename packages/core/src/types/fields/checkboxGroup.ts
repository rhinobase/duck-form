export type CheckboxGroupProps = {
	type: "checkboxgroup";
	options: {
		value: string | number;
		label?: string;
	}[];
	defaultValue?: (string | number)[];
};
