"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  Suffix,
  eventHandler,
  useBoolean,
} from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { InputWrapper } from "./utils";

export type PasswordProps = {
  type: "password";
  placeholder?: string;
  defaultValue?: string;
};

export function PasswordField() {
  const [showPassword, toggle] = useBoolean(false);

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const props = useField<PasswordProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { register } = useFormContext();

  const handler = eventHandler(() => toggle());

  return (
    <InputWrapper>
      <InputField
        id={componentId}
        type={showPassword ? "text" : "password"}
        placeholder={props.placeholder}
        {...register(componentId)}
      />
      <Suffix className="pointer-events-auto">
        <Button
          type="button"
          size="icon"
          aria-label="show and hide password"
          variant="ghost"
          onPointerDown={handler}
          onKeyDown={handler}
          className="rounded p-1"
        >
          <Icon className="size-4 stroke-2" />
        </Button>
      </Suffix>
    </InputWrapper>
  );
}
