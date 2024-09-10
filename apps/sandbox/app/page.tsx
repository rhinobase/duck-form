"use client";
import { Blueprint, DuckField, DuckForm } from "duck-form";

export default function HomePage() {
	return (
		<DuckForm components={{}}>
			<Blueprint schema={{}}>
				<DuckField name="name" />
			</Blueprint>
		</DuckForm>
	);
}
