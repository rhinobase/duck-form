"use client";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Button, eventHandler } from "@rafty/ui";
import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { BlockType } from "../constants";
import type { FieldProps } from "../types";

export type ArrayProps = {
  type: BlockType.ARRAY;
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
  const { resolverKey } = useDuckForm();
  const props = useField<ArrayProps>();

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof ArrayProps]) ?? autoId;

  const { control } = useFormContext();
  const { fields, append, swap, remove, insert } = useFieldArray({
    control,
    name: componentId,
  });

  const handleAddItem = eventHandler(() => append(undefined));

  return (
    <>
      {fields.map((_, index) => {
        const handleGoUp = eventHandler(() => swap(index, index - 1));
        const handleGoDown = eventHandler(() => swap(index, index + 1));
        const handleInsertNew = eventHandler(() => insert(index + 1, {}));
        const handleDelete = eventHandler(() => remove(index));

        const name = `${componentId}.${index}`;

        const nestedFieldProps = {
          name,
          [resolverKey]: `${componentId}.of.${index}`,
        };

        return (
          <div
            key={name}
            className="flex mb-2 min-h-[120px] items-center gap-2 rounded-lg border border-secondary-200 p-2 dark:border-secondary-800"
          >
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleGoUp}
                onKeyDown={handleGoUp}
                isDisabled={index === 0}
              >
                <ArrowUpIcon className="size-4 stroke-2" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleGoDown}
                onKeyDown={handleGoDown}
                isDisabled={index === fields.length - 1}
              >
                <ArrowDownIcon className="size-4 stroke-2" />
              </Button>
            </div>
            <DuckField {...nestedFieldProps} />
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleInsertNew}
                onKeyDown={handleInsertNew}
              >
                <PlusIcon className="size-4 stroke-2" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                colorScheme="error"
                onClick={handleDelete}
                onKeyDown={handleDelete}
              >
                <TrashIcon className="size-4 stroke-2" />
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
