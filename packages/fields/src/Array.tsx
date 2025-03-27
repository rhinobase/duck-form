"use client";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, eventHandler } from "@rafty/ui";
import { DuckField, useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { FieldProps } from "./types";
import type { FieldType } from "./constants";

export type ArrayProps = {
  type: FieldType.ARRAY;
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

export function ArrayField() {
  const props = useField<ArrayProps>();
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();
  const { fields, append, swap, remove, insert } = useFieldArray({
    control,
    name: componentId,
  });

  const handleAddItem = eventHandler(() => append(undefined));
  const handleGoUp = (index: number) =>
    eventHandler(() => swap(index, index - 1));
  const handleGoDown = (index: number) =>
    eventHandler(() => swap(index, index + 1));
  const handleInsertNew = (index: number) =>
    eventHandler(() => insert(index + 1, undefined));
  const handleDelete = (index: number) => eventHandler(() => remove(index));

  return (
    <>
      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex mb-2 min-h-[120px] items-center gap-2 rounded-lg border border-secondary-200 p-2 dark:border-secondary-800"
        >
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoUp(index)}
              onKeyDown={handleGoUp(index)}
              isDisabled={index === 0}
            >
              <ArrowUpIcon className="size-4 stroke-2" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleGoDown(index)}
              onKeyDown={handleGoDown(index)}
              isDisabled={index === fields.length - 1}
            >
              <ArrowDownIcon className="size-4 stroke-2" />
            </Button>
          </div>
          <DuckField id={`${componentId}.${index}`} {...props.of} />
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleInsertNew(index)}
              onKeyDown={handleInsertNew(index)}
            >
              <PlusIcon className="size-4 stroke-2" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              colorScheme="error"
              onClick={handleDelete(index)}
              onKeyDown={handleDelete(index)}
            >
              <TrashIcon className="size-4 stroke-2" />
            </Button>
          </div>
        </div>
      ))}
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
