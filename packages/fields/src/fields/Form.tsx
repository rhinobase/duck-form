import { DevTool } from "@hookform/devtools";
import { DuckField, useDuckForm, useField } from "duck-form";
import { useId } from "react";
import { FormProvider, useForm } from "react-hook-form";
import type z from "zod";
import type { formSchema } from "../validations";

export type FormProps = z.infer<typeof formSchema>;

export function Form() {
  const props = useField<FormProps>();
  const { resolverKey } = useDuckForm();
  const methods = useForm();

  const { handleSubmit } = methods;
  const { onSubmit, onError, blocks, enableDevtool, className, title } = props;
  const fieldProps = className ? { className } : {};

  const autoId = useId();
  const componentId = String(props[resolverKey as keyof FormProps]) ?? autoId;

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
        {Object.keys(blocks).map((key) => {
          const name = `${componentId}.${key}`;

          const nestedFieldProps = {
            name,
            [resolverKey]: `${componentId}.blocks.${key}`,
          };

          return <DuckField key={key} {...nestedFieldProps} />;
        })}
        {enableDevtool && <DevTool control={methods.control} />}
      </form>
    </FormProvider>
  );
}
