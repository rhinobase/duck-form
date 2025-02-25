"use client";
import { Button as RaftyButton } from "@rafty/ui/button";
import { DuckField, useField, usePageContext } from "duck-form";
import React from "react";
import z from "zod";
import { useShallow } from "zustand/react/shallow";

enum HeightType {
  AUTO = "auto",
  FIXED = "fixed",
}

enum HorizontalAlign {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
  STRETCH = "stretch",
}

enum StyleVariant {
  SOLID = "solid",
  OUTLINE = "outline",
  GHOST = "ghost",
}

const buttonSchema = z.object({
  ariaLabel: z.string().optional(),
  loading: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  disabled: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  iconBefore: z.string().optional(),
  iconAfter: z.string().optional(),
  heightType: z.nativeEnum(HeightType).default(HeightType.FIXED),
  margin: z.string().optional(),
  horizontalAlign: z
    .nativeEnum(HorizontalAlign)
    .default(HorizontalAlign.STRETCH),
  allowWrap: z
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
  styleVariant: z.nativeEnum(StyleVariant).default(StyleVariant.SOLID),
  submit: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  submitTargetId: z.string().optional(),
});

export type ButtonProps = {
  id: string;
  blocks: Record<string, unknown>;
};

export function ButtonField() {
  const { id, blocks } = useField<ButtonProps>();

  const props = usePageContext<{
    [K in keyof z.infer<typeof buttonSchema>]: string;
  }>(
    useShallow((state) => {
      // @ts-expect-error
      const _state = state.context[id];

      return {
        ariaLabel: _state.ariaLabel,
        loading: _state.loading,
        disabled: _state.disabled,
        iconBefore: _state.iconBefore,
        iconAfter: _state.iconAfter,
        heightType: _state.heightType,
        margin: _state.margin,
        horizontalAlign: _state.horizontalAlign,
        allowWrap: _state.allowWrap,
        hidden: _state.hidden,
        styleVariant: _state.styleVariant,
        submit: _state.submit,
        submitTargetId: _state.submitTargetId,
      };
    })
  );

  const fieldProps = buttonSchema.parse(props);

  return (
    <RaftyButton {...fieldProps}>
      {blocks &&
        Object.entries(blocks).map(([key, items]) => (
          <DuckField key={key} id={key} {...(items as object)} />
        ))}
    </RaftyButton>
  );
}
