import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  InputField,
  InputGroup,
  Suffix,
  eventHandler,
  useBoolean,
} from "@rafty/ui";
import { evalProp, type passwordSchema } from "@rhinobase/shared";
import React from "react";

export type PasswordProps = typeof passwordSchema.infer;

export function PasswordField({
  onChange,
  defaultValue,
  name,
  placeholder,
  value,
}: PasswordProps) {
  const [showPassword, toggle] = useBoolean(false);

  const props = { name, placeholder, defaultValue, value, onChange };

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const fieldProps = Object.entries(props).reduce<Record<string, any>>(
    (prev, [key, val]) => {
      if (
        val &&
        typeof val === "object" &&
        "type" in val &&
        (val.type === "literal" || val.type === "script")
      ) {
        prev[key] = evalProp(val);
      }

      return prev;
    },
    {}
  );

  const Icon = showPassword ? EyeSlashIcon : EyeIcon;

  const handlerToggleShowPassword = eventHandler(() => toggle());

  return (
    <InputGroup>
      <InputField
        id={fieldProps.name}
        defaultValue={fieldProps.defaultValue}
        placeholder={fieldProps.placeholder}
        type={showPassword ? "text" : "password"}
        value={fieldProps.value}
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
