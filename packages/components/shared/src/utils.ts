import mustache from "mustache";

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
  PARAGRAPH = "paragraph",
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
  TAG = "tag",
  TEXT = "text",
  TEXTAREA = "textarea",
}

export enum ORIENTATION {
  ROW = "row",
  COL = "col",
  ROW_REVERSE = "row-reverse",
}

const VARIABLE_REGEX = /\{\{(.*?)\}\}/g;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function valueResolver<T = any>(
  context: Record<string, unknown>,
  value?: string,
): T | undefined {
  if (!value) return undefined;

  // biome-ignore lint/security/noGlobalEval: <explanation>
  return eval(mustache.render(value, context));
}

export function findAllVariables(...props: (string | undefined)[]) {
  const tmp: string[] = [];

  for (const prop of props) {
    if (!prop) continue;

    const result = prop.match(VARIABLE_REGEX);

    if (result)
      tmp.push(
        ...result.map((match) => match.replace(/\{\{|\}\}/g, "").trim()),
      );
  }

  return Array.from(new Set(tmp));
}
