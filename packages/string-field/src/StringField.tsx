import { InputField as RaftyInputField } from "@rafty/ui/input-field";
import type { stringSchema } from "@rhinobase/shared";
import { useField, usePageContext } from "duck-form";
import React, { type PropsWithChildren } from "react";
import z from "zod";
import { useShallow } from "zustand/react/shallow";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  InputGroup,
  LeftAddon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Prefix,
  RightAddon,
  Suffix,
} from "@rafty/ui";

export type StringProps = z.infer<typeof stringSchema>;

enum AutoCapitalize {
  NONE = "none",
  SENTENCES = "sentences",
  WORDS = "words",
}

enum PatternType {
  EMAIL = "email",
  REGEX = "regex",
  URL = "url",
}

enum AutoFill {
  NAME = "name",
  HONORIFIC_PREFIX = "honorific-prefix",
  GIVEN_NAME = "given-name",
  ADDITIONAL_NAME = "additional-name",
}

const stringFieldSchema = z.object({
  value: z.string().optional(),
  placeholder: z.string().optional(),
  textAfter: z.string().optional(),
  textBefore: z.string().optional(),
  iconAfter: z.string().optional(),
  iconBefore: z.string().optional(),
  inputTooltip: z.string().optional(),
  spellCheck: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  autoComplete: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  autoFill: z.nativeEnum(AutoFill).optional(),
  autoCapitalize: z.nativeEnum(AutoCapitalize).default(AutoCapitalize.NONE),
  readOnly: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
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
  formDataKey: z.string().optional(),
  patternType: z.nativeEnum(PatternType).optional(),
  pattern: z.string().optional(),
  minLength: z.string().optional(),
  maxLength: z.string().optional(),
  margin: z.string().optional(),
  showClear: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  showCharacterCount: z
    .union([
      z.boolean(),
      z
        .string()
        .trim()
        .toLowerCase()
        .transform((val) => !(val === "false" || val === "0" || val === "")),
    ])
    .optional(),
  // TODO: Add 2 more props: maintainSpaceWhenHidden & showInEditor
});

export function StringField() {
  // @ts-expect-error
  const { id } = useField<StringProps>();
  const update = usePageContext((state) => state.update);

  const props = usePageContext<{
    [K in keyof z.infer<typeof stringFieldSchema>]: string;
  }>(
    useShallow((state) => {
      // @ts-expect-error
      const _state = state.context[id];

      return {
        value: _state.value,
        placeholder: _state.placeholder,
        textAfter: _state.textAfter,
        textBefore: _state.textBefore,
        iconAfter: _state.iconAfter,
        iconBefore: _state.iconBefore,
        inputTooltip: _state.inputTooltip,
        spellCheck: _state.spellCheck,
        autoComplete: _state.autoComplete,
        autoFill: _state.autoFill,
        autoCapitalize: _state.autoCapitalize,
        readOnly: _state.readOnly,
        loading: _state.loading,
        disabled: _state.disabled,
        formDataKey: _state.formDataKey,
        patternType: _state.patternType,
        pattern: _state.pattern,
        minLength: _state.minLength,
        maxLength: _state.maxLength,
        margin: _state.margin,
        showClear: _state.showClear,
        showCharacterCount: _state.showCharacterCount,
      };
    })
  );

  const {
    autoComplete,
    autoFill,
    minLength,
    maxLength,
    textAfter,
    textBefore,
    iconAfter,
    iconBefore,
    inputTooltip,
    loading,
    formDataKey,
    patternType,
    pattern,
    margin,
    showClear,
    showCharacterCount,
    ...fieldProps
  } = stringFieldSchema.parse(props);

  // TODO: solve the focus shift issue with tooltip wrapper and then implement it around input field
  const TooltipWrapper = (props: PropsWithChildren) => {
    if (inputTooltip && inputTooltip !== "")
      return (
        <Popover>
          <PopoverTrigger asChild>{props.children}</PopoverTrigger>
          <PopoverContent
            className="w-max p-1 rounded"
            align="start"
            side="top"
            sideOffset={5}
            showArrow={false}
            forceMount={true}
          >
            <p className="leading-none text-sm">{inputTooltip}</p>
          </PopoverContent>
        </Popover>
      );
    return <>{props.children}</>;
  };

  const InputGroupWrapper = (props: PropsWithChildren) => {
    if (textBefore || textAfter || iconBefore || iconAfter)
      return (
        <InputGroup>
          {textBefore && <LeftAddon>{textBefore}</LeftAddon>}
          {iconBefore && (
            <Prefix>
              <span className="material-symbols-outlined !text-lg !text-secondary-500 dark:!text-secondary-400">
                {iconBefore}
              </span>
            </Prefix>
          )}
          {props.children}
          {iconAfter && (
            <Suffix>
              <span className="material-symbols-outlined !text-lg !text-secondary-500 dark:!text-secondary-400">
                {iconAfter}
              </span>
            </Suffix>
          )}
          {textAfter && <RightAddon>{textAfter}</RightAddon>}
        </InputGroup>
      );
    return <>{props.children}</>;
  };

  return (
    <div className="w-full" style={{ margin }}>
      <InputGroupWrapper>
        <div className="w-full relative">
          <RaftyInputField
            {...fieldProps}
            type={patternType === PatternType.REGEX ? "text" : patternType}
            autoComplete={autoComplete ? autoFill : undefined}
            minLength={
              minLength && minLength !== "" ? Number(minLength) : undefined
            }
            maxLength={
              maxLength && maxLength !== "" ? Number(maxLength) : undefined
            }
            isLoading={loading}
            form={formDataKey}
            pattern={patternType === PatternType.REGEX ? pattern : undefined}
            onChange={(event) => {
              console.log("Function is called");
              update(`${id}.value`, event.target.value);
            }}
          />
          {showClear && (fieldProps.value?.length ?? 0) > 0 && (
            <div
              role="button"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-secondary-500 dark:bg-secondary-400 rounded-full p-0.5"
              onClick={() => update(`${id}.value`, "")}
              onKeyDown={() => update(`${id}.value`, "")}
            >
              <XMarkIcon className="size-3 stroke-2 stroke-white" />
            </div>
          )}
        </div>
      </InputGroupWrapper>
      {showCharacterCount && (
        <p className="text-right font-medium">{fieldProps.value?.length}</p>
      )}
    </div>
  );
}
