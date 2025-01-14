"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  Suffix,
  eventHandler,
  useBoolean,
} from "@rafty/ui";
import { InputWrapper, type InputWrapperProps } from "./InputWrapper";
import type { FieldType } from "./constants";

export type PasswordProps = {
  name?: string;
  type: FieldType.PASSWORD;
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (value?: string) => void;
} & Omit<InputWrapperProps, "suffix">;

export function PasswordField({
  type,
  onChange,
  size = "md",
  suffixIcon,
  prefix,
  prefixIcon,
  ...props
}: PasswordProps) {
  const [showPassword, toggle] = useBoolean(false);

  const inputWrapperProps = {
    size,
    suffixIcon,
    prefix,
    prefixIcon,
  };

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const handlerToggleShowPassword = eventHandler(() => toggle());

  return (
    <InputWrapper {...inputWrapperProps}>
      <InputField
        {...props}
        id={props.name}
        type={showPassword ? "text" : "password"}
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
    </InputWrapper>
  );
}
