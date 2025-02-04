import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  InputGroup,
  Suffix,
  eventHandler,
  useBoolean,
} from "@rafty/ui";
import type { passwordSchema } from "@rhinobase/shared";
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

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const handlerToggleShowPassword = eventHandler(() => toggle());

  return (
    <InputGroup>
      <InputField
        id={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
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
