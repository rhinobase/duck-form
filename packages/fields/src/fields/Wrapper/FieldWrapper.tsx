"use client";
import { ErrorMessage } from "@hookform/error-message";
import {
  classNames,
  FieldControl,
  getValue,
  ErrorMessage as RaftyErrorMessage,
  type FieldWrapper as RaftyFieldWrapper,
  Text,
} from "@rafty/ui";
import { useDuckForm, useField } from "duck-form";
import { Fragment, type PropsWithChildren, useEffect, useId } from "react";
import type z from "zod";
import type { BlockType } from "../../constants";
import type { fieldWrapperSchema } from "../../validations";
import { Label } from "../utils";

export type FieldWrapperProps = z.infer<typeof fieldWrapperSchema>;

export type FieldWrapper = PropsWithChildren<{
  className?: RaftyFieldWrapper["className"];
}>;

export function FieldWrapper({ className, children }: FieldWrapper) {
  const props = useField<FieldWrapperProps & { type: BlockType }>();
  const { resolverKey } = useDuckForm();

  const autoId = useId();
  const componentId =
    String(props[resolverKey as keyof FieldWrapperProps]) ?? autoId;

  const {
    disabled,
    required,
    readonly,
    hidden,
    orientation,
    label,
    description,
    onChange,
  } = props;

  useEffect(() => {
    onChange?.();
  }, [onChange]);

  const LabelAndDescriptionWrapper =
    label && description
      ? ({ children }: PropsWithChildren) => <div>{children}</div>
      : Fragment;

  return (
    <div
      className={classNames(
        getValue(hidden) && "hidden",
        "relative [&>div>div]:w-full w-full space-y-1",
        className
      )}
    >
      <FieldControl
        name={componentId}
        isDisabled={disabled}
        isRequired={required}
        isReadOnly={readonly}
        orientation={orientation}
      >
        <LabelAndDescriptionWrapper>
          {label && <Label className="leading-snug">{label}</Label>}
          {description && (
            <Text className="text-secondary-600 dark:text-secondary-400 text-xs font-medium">
              {description}
            </Text>
          )}
        </LabelAndDescriptionWrapper>
        {children}
      </FieldControl>
      <FieldErrorMessage name={componentId} />
    </div>
  );
}

function FieldErrorMessage({ name }: { name: string }) {
  return (
    <ErrorMessage
      name={name}
      render={({ message }) => <RaftyErrorMessage>{message}</RaftyErrorMessage>}
    />
  );
}
