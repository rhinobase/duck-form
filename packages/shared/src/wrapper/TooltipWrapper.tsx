"use client";
import { Tooltip, TooltipContent, TooltipTrigger } from "@rafty/ui/tooltip";
import { useField, usePageContext } from "duck-form";
import type { PropsWithChildren } from "react";
import React from "react";
import z from "zod";
import { useShallow } from "zustand/react/shallow";

export const tooltipSchema = z.object({
  tooltipText: z.string().optional(),
});

export type TooltipWrapper = PropsWithChildren;

export function TooltipWrapper({ children }: TooltipWrapper) {
  const { id } = useField();

  const props = usePageContext<{
    [K in keyof z.infer<typeof tooltipSchema>]: string;
  }>(
    useShallow((state) => {
      // @ts-expect-error
      const _state = state.context[id];

      return {
        tooltipText: _state.tooltipText,
      };
    })
  );

  const { tooltipText } = tooltipSchema.parse(props);

  if (tooltipText)
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="w-full">{children}</div>
        </TooltipTrigger>
        <TooltipContent
          align="start"
          className="rounded px-1.5 py-1 leading-none"
        >
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    );

  return children;
}
