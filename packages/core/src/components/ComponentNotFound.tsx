import { useField } from "../providers/field";

export function ComponentNotFound() {
	const { type } = useField();
	return (
		<p>
			Component of type <kbd>{type}</kbd> doesn't exist!
		</p>
	);
}
