"use client";
import {
  type ValueOrFunction,
  classNames,
  getValue,
  useFieldControlContext,
} from "@rafty/ui";
import { useField } from "duck-form";
import type { LabelHTMLAttributes } from "react";
import React from "react";

export type Label = LabelHTMLAttributes<HTMLLabelElement> & {
  isRequired?: ValueOrFunction;
};

export function Label({ children, className, isRequired, ...props }: Label) {
  const { type } = useField();
  const { name, isRequired: isParentRequired } = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const required = getValue(isRequired) ?? isParentRequired;

  return (
    <label
      {...props}
      htmlFor={type === "array" || type === "object" ? undefined : name}
      className={classNames(
        required &&
          "after:ml-0.5 after:text-red-500 after:content-['*'] after:dark:text-red-400",
        "text-secondary-800 dark:text-secondary-200 select-none text-sm font-medium",
        className
      )}
    >
      {children}
    </label>
  );
}
