"use client";
import { JSONExplorer } from "@rafty/corp";
import { Kbd } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";

export function DefaultField() {
	const props = useField();

	const { generateId } = useDuckForm();
	const { schema } = useBlueprint();

	const autoId = useId();
	const customId = useMemo(
		() => generateId(schema, props),
		[generateId, schema, props],
	);

	const componentId = customId ?? autoId;

	return (
		<div className="space-y-1">
			<p>
				Field type <Kbd>{props.type}</Kbd> is not available!
			</p>
			<JSONExplorer data={{ field: { ...props, id: componentId } }} />
		</div>
	);
}
