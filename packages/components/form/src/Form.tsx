import { DevTool } from "@hookform/devtools";
import type { formSchema } from "@rhinobase/shared";
import { DuckField, useBlueprint, useDuckForm, useField } from "duck-form";
import React, { useId, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";

export type FormProps = z.infer<typeof formSchema>;

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
  const { onSubmit, onError, blocks, enableDevtool, className, title } = props;
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
            <DuckField key={key} id={key} {...items} />
          ))}
        {enableDevtool && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
}
