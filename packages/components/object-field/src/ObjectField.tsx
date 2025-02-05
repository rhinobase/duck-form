"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Label,
} from "@rafty/ui";
import type { objectSchema } from "@rhinobase/shared";
import { DuckField, useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import type z from "zod";

export type ObjectProps = z.infer<typeof objectSchema>;

const DEFAULT_GROUP_KEY = "__default";

export function ObjectField() {
  const props = useField<ObjectProps>();
  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props]
  );

  const componentId = customId ?? autoId;

  const [groupedFields, fieldSetsRegistry] = useMemo(
    () => [
      // biome-ignore lint/suspicious/noExplicitAny: <explanation>
      Object.entries(props.fields).reduce<Record<string, Record<string, any>>>(
        (prev, [name, field]) => {
          let key = DEFAULT_GROUP_KEY;

          if (field.fieldset) {
            if (!(field.fieldset in prev)) prev[field.fieldset] = {};
            key = field.fieldset;
          }

          prev[key]![name] = field;

          return prev;
        },
        { [DEFAULT_GROUP_KEY]: {} }
      ),
      props.fieldsets?.reduce<Record<string, string>>((prev, cur) => {
        prev[cur.name] = cur.label;
        return prev;
      }, {}),
    ],
    [props.fields, props.fieldsets]
  );

  return (
    <div className="p-3 md:p-4 lg:p-5 xl:p-6 border flex flex-col border-secondary-200 dark:border-secondary-800 rounded-md gap-3 md:gap-4 lg:gap-5 xl:gap-6">
      {Object.entries(groupedFields).map(([key, fields], index) => {
        const content = [
          Object.entries(fields).map(([fieldName, field]) => {
            const uniqueName = `${componentId}.${fieldName}`;

            return (
              <DuckField
                key={uniqueName}
                {...field}
                id={uniqueName}
                name={uniqueName}
              />
            );
          }),
        ];

        if (key === DEFAULT_GROUP_KEY) return content;

        const uniqueName = `${componentId}.${index}`;

        if (props.options?.collapsible)
          return (
            <Accordion type="multiple" variant="outline" key={uniqueName}>
              <AccordionItem value={uniqueName}>
                <AccordionTrigger>
                  <Label>{fieldSetsRegistry?.[key]}</Label>
                </AccordionTrigger>
                <AccordionContent className="[&>div]:!space-y-3">
                  {content}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );

        return (
          <div
            key={uniqueName}
            className="space-y-3 md:space-y-4 lg:space-y-5 xl:space-y-6 pt-3"
          >
            <Label>{fieldSetsRegistry?.[key]}</Label>
            {content}
          </div>
        );
      })}
    </div>
  );
}
