import { Thread } from "@fibr/react";
import { useBlueprint } from "./providers";

export type Field = {
	name: string;
	type?: string;
};

export function Field(props: Field) {
	const context = useBlueprint();

	if (!context && !props.type) throw new Error("No schema provided");

	let type = props.type;

	if (context?.schema) type = findField();

	return <Thread {...props} id={props.name} type={type ?? "default"} />;
}

function findField() {
	return "string";
}
