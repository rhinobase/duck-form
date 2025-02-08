// import { renderString } from "nunjucks";
import z from "zod";

export enum BlockType {
  ARRAY = "array",
  CALENDAR = "calendar",
  BOOLEAN = "boolean",
  BUTTON = "button",
  CHECKBOX_GROUP = "checkboxgroup",
  COLOR_PICKER = "colorPicker",
  CURRENCY_INPUT = "currencyInput",
  DATE = "date",
  DATE_RANGE = "dateRange",
  DATE_TIME = "datetime",
  DEFAULT = "default",
  DIV = "div",
  EDITABLE_NUMBER = "editableNumber",
  EDITABLE_TEXT = "editableText",
  EDITABLE_TEXTAREA = "editableTextarea",
  FORM = "form",
  LINK = "link",
  LISTBOX = "listbox",
  MULTI_LISTBOX = "multiListbox",
  NUMBER = "number",
  OBJECT = "object",
  PARAGRAPH = "p",
  PASSWORD = "password",
  PERCENTAGE_INPUT = "percentageInput",
  PIN = "pin",
  RADIO = "radio",
  RANGE_SLIDER = "rangeSlider",
  RATING = "rating",
  SEGMENTED_CONTROL = "segmentedControl",
  SELECT = "select",
  SLIDER = "slider",
  SPAN = "span",
  STRING = "string",
  SWTICH = "switch",
  SWITCH_GROUP = "switchGroup",
  TABLE = "table",
  TAG = "tag",
  TEXT = "text",
  TEXTAREA = "textarea",
}

export enum ORIENTATION {
  ROW = "row",
  COL = "col",
  ROW_REVERSE = "row-reverse",
}

export function evalProp(
  struct?:
    | { type: "literal"; value: unknown }
    | { type: "script"; value: string },
) {
  if (!struct) return "[UNDEFINED]";

  if (struct.type === "literal") return struct.value;

  try {
    // biome-ignore lint/security/noGlobalEval: <explanation>
    return eval(addVariables(struct.value));
  } catch (err) {
    console.error(err);
    return `[ERROR] ${struct.value}`;
  }
}

export function addVariables(template: string) {
  return template;
}

export const scriptOrLiteral = <T extends z.ZodType>(value: T) =>
  z.union([
    z.object({ type: z.literal("script"), value }),
    z.object({ type: z.literal("literal"), value }),
  ]);

// const VARIABLE_REGEX = /\{\{(.*?)\}\}/g;

// export function valueResolver<T = any>(
//   context: Record<string, unknown>,
//   value?: string
// ): T | undefined {
//   if (!value) return undefined;

//   const renderedValue = renderString(value, context);

//   // biome-ignore lint/security/noGlobalEval: <explanation>
//   return eval(renderedValue);
// }

// export function findAllVariables(...props: (string | undefined)[]) {
//   const tmp: string[] = [];

//   for (const prop of props) {
//     if (!prop) continue;

//     const result = prop.match(VARIABLE_REGEX);

//     if (result)
//       tmp.push(
//         ...result.map((match) => match.replace(/\{\{|\}\}/g, "").trim())
//       );
//   }

//   return Array.from(new Set(tmp));
// }
