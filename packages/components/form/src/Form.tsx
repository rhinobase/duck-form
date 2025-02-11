"use client";
import { DevTool } from "@hookform/devtools";
import { evalProp, type formSchema } from "@rhinobase/shared";
import { DuckField, useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

export type FormProps = typeof formSchema.infer;

export function Form() {
  const props = useField<FormProps>();
  const methods = useForm();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props]
  );

  const { handleSubmit } = methods;
  const { onSubmit, onError, blocks, enableDevtool, className, title } =
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    Object.entries(props).reduce<Record<string, any>>((prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        // @ts-expect-error
        prev[key] = evalProp(val);
      }

      return prev;
    }, {});

  const fieldProps = className ? { className } : {};

  const componentId = customId ?? autoId;

  return (
    <FormProvider {...methods}>
      <form
        {...fieldProps}
        id={componentId}
        title={title}
        onSubmit={handleSubmit(
          onSubmit ?? console.log,
          onError ?? console.error
        )}
      >
        {blocks &&
          Object.entries(blocks).map(([key, items]) => (
            <DuckField key={key} id={key} {...(items as object)} />
          ))}
        {enableDevtool && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
}
