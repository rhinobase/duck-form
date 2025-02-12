import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui/button";
import { InputField } from "@rafty/ui/input-field";
import { InputGroup, Suffix } from "@rafty/ui/input-group";
import { eventHandler } from "@rafty/ui/utils";
import { useBoolean } from "@rafty/ui/hooks";
import { type passwordSchema, useEvaluate } from "@rhinobase/shared";
import React from "react";
import type z from "zod";

export type PasswordProps = z.infer<typeof passwordSchema>;

export function PasswordField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: PasswordProps) {
  const [showPassword, toggle] = useBoolean(false);

  const props = { name, placeholder, defaultValue, value, onChange };

  const fieldProps = useEvaluate(props);

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const handlerToggleShowPassword = eventHandler(() => toggle());

  return (
    <InputGroup>
      <InputField
        {...fieldProps}
        id={fieldProps.name}
        type={showPassword ? "text" : "password"}
        onChange={(event) => fieldProps.onChange?.(event.target.value)}
      />
      <Suffix className="pointer-events-auto">
        <Button
          type="button"
          size="icon"
          aria-label="show and hide password"
          variant="ghost"
          onPointerDown={handlerToggleShowPassword}
          onKeyDown={handlerToggleShowPassword}
          className="rounded p-1"
        >
          <Icon className="size-4 stroke-2" />
        </Button>
      </Suffix>
    </InputGroup>
  );
}
