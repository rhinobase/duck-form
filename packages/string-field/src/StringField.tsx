import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import { type stringSchema, usePageContext } from "@rhinobase/shared";
import { useField } from "duck-form";
import React from "react";
import type z from "zod";

export type StringProps = z.infer<typeof stringSchema>;

export function StringField() {
  // @ts-expect-error
  const { id } = useField<StringProps>();
  const update = usePageContext((state) => state.update);
  const { inputType, ...props } = usePageContext(
    // @ts-expect-error
    (state) => state.context[id],
  );

  return (
    <RaftyInputField
      {...props}
      id={props.name}
      type={inputType}
      onChange={(event) => {
        console.log("Function Called");
        update(`${id}.value`, event.target.value);
      }}
    />
  );
}
