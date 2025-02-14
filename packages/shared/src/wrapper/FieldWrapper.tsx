"use client";
import { ErrorMessage } from "@hookform/error-message";
import { ErrorMessage as RaftyErrorMessage } from "@rafty/ui/error-message";
import { FieldControl } from "@rafty/ui/field-control";
import type { FieldWrapper as RaftyFieldWrapper } from "@rafty/ui/field-wrapper";
import { classNames } from "@rafty/ui/utils";
import { useBlueprint, useDuckForm, useField, usePageContext } from "duck-form";
import React, { Fragment, type PropsWithChildren, useId, useMemo } from "react";
import z from "zod";
import { useShallow } from "zustand/react/shallow";
import { Label } from "./Label.js";

enum LabelAlign {
  LEFT = "left",
  RIGHT = "right",
}

enum LabelPosition {
  LEFT = "left",
  TOP = "top",
}

enum LabelWidthUnit {
  PERCENTAGE = "%",
  PIXELS = "px",
  COLUMNS = "col",
}

const fieldWrapperSchema = z.object({
  label: z.string().optional(),
  labelAlign: z.nativeEnum(LabelAlign).default(LabelAlign.LEFT),
  labelCaption: z.string().optional(),
  labelPosition: z.nativeEnum(LabelPosition).default(LabelPosition.LEFT),
  labelWidth: z.string().optional(),
  labelWidthUnit: z
    .nativeEnum(LabelWidthUnit)
    .default(LabelWidthUnit.PERCENTAGE),
  labelWrap: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  hideLabel: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  required: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  hideValidationMessage: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  hidden: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
});

export type FieldWrapper = PropsWithChildren<{
  className?: RaftyFieldWrapper["className"];
}>;

export function FieldWrapper({ className, children }: FieldWrapper) {
  const { id } = useField();

  const props = usePageContext<{
    [K in keyof z.infer<typeof fieldWrapperSchema>]: string;
  }>(
    useShallow((state) => {
      // @ts-expect-error
      const _state = state.context[id];

      return {
        label: _state.label,
        labelAlign: _state.labelAlign,
        labelCaption: _state.labelCaption,
        labelPosition: _state.labelPosition,
        labelWidth: _state.labelWidth,
        labelWidthUnit: _state.labelWidthUnit,
        labelWrap: _state.labelWrap,
        hideLabel: _state.hideLabel,
        required: _state.required,
        hideValidationMessage: _state.hideValidationMessage,
        hidden: _state.hidden,
      };
    })
  );

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, { id }),
    [generateId, schema, id]
  );

  const componentId = customId ?? autoId;

  const fieldProps = fieldWrapperSchema.parse(props);

  const LabelAndDescriptionWrapper =
    fieldProps.label && fieldProps.labelCaption
      ? ({ children }: PropsWithChildren) => <div>{children}</div>
      : Fragment;

  return (
    <div
      className={classNames(
        fieldProps.hidden && "hidden",
        "relative [&>div>div]:w-full w-full space-y-1",
        className
      )}
    >
      <FieldControl
        name={componentId}
        isRequired={fieldProps.required}
        orientation={
          fieldProps.labelPosition === LabelPosition.LEFT
            ? fieldProps.labelAlign === LabelAlign.LEFT
              ? "row"
              : "row-reverse"
            : "col"
        }
      >
        <LabelAndDescriptionWrapper>
          {fieldProps.label && !fieldProps.hideLabel && (
            <Label className="leading-snug">{fieldProps.label}</Label>
          )}
          {fieldProps.labelCaption && (
            <p className="text-secondary-600 dark:text-secondary-400 text-xs font-medium">
              {fieldProps.labelCaption}
            </p>
          )}
        </LabelAndDescriptionWrapper>
        {children}
      </FieldControl>
      {!fieldProps.hideValidationMessage && (
        <FieldErrorMessage name={componentId} />
      )}
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
