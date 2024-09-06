"use client";
import { BlueprintProvider, DyForm, Field } from "dyform";

export default function HomePage() {
	return (
		<DyForm plugins={[]}>
			<BlueprintProvider schema={{}}>
				<Field name="name" />
			</BlueprintProvider>
		</DyForm>
	);
}
