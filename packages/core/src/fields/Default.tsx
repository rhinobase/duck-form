"use client";
import { useThread } from "@fibr/react";
import { JSONExplorer } from "@rafty/corp";
import { Kbd } from "@rafty/ui";

export function DefaultField() {
	const props = useThread();

	return (
		<div className="space-y-1">
			<p>
				Field type <Kbd>{props.type}</Kbd> is not available!
			</p>
			<JSONExplorer data={{ field: props }} />
		</div>
	);
}
