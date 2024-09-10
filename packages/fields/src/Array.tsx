"use client";
import { Thread, useThread } from "@fibr/react";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	PlusIcon,
	TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, eventHandler } from "@rafty/ui";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { ArrayProps } from "../types";

export function ArrayField() {
	const { id, ...props } = useThread<ArrayProps>();
	const { control } = useFormContext();

	const { fields, append, swap, remove, insert } = useFieldArray({
		control,
		name: id,
	});

	const handleAddItem = eventHandler(() => append({}));

	return (
		<>
			{fields.map((_, index) => {
				const handleGoUp = eventHandler(() => swap(index, index - 1));
				const handleGoDown = eventHandler(() => swap(index, index + 1));
				const handleInsertNew = eventHandler(() => insert(index + 1, {}));
				const handleDelete = eventHandler(() => remove(index));

				return (
					<div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={index}
						className="flex mb-2 min-h-[120px] items-center gap-2 rounded-md border border-secondary-200 p-2 dark:border-secondary-800"
					>
						<div className="space-y-3">
							<Button
								variant="ghost"
								size="icon"
								onClick={handleGoUp}
								onKeyDown={handleGoUp}
								isDisabled={index === 0}
							>
								<ArrowUpIcon className="size-5" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								onClick={handleGoDown}
								onKeyDown={handleGoDown}
								isDisabled={index === fields.length - 1}
							>
								<ArrowDownIcon className="size-5" />
							</Button>
						</div>
						<Thread id={`${id}.${index}`} {...props.of} />
						<div className="space-y-3">
							<Button
								variant="ghost"
								size="icon"
								onClick={handleInsertNew}
								onKeyDown={handleInsertNew}
							>
								<PlusIcon className="size-5" />
							</Button>
							<Button
								variant="ghost"
								size="icon"
								colorScheme="error"
								onClick={handleDelete}
								onKeyDown={handleDelete}
							>
								<TrashIcon className="size-5" />
							</Button>
						</div>
					</div>
				);
			})}
			<Button
				onClick={handleAddItem}
				onKeyDown={handleAddItem}
				className="w-max"
			>
				Add
			</Button>
		</>
	);
}
