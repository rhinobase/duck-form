export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      button1: {
        type: "button",
        blocks: {
          text1: {
            type: "text",
            value: "Button 1",
          },
        },
        x: 4,
        y: 10,
        colSpan: 2,
        rowSpan: 4,
        ariaLabel: "Button 1",
        iconAfter: "arrow-right",
        iconBefore: "arrow-left",
        tooltipText: "Button 1",
        // When submit is "false"
        loading: "false",
        disabled: "false",
        // When submit is "true"
        // submit: "true",
        // submitTargetId: "form-id",
        heightType: "auto",
        margin: "4px 8px",
        horizontalAlign: "left",
        allowWrap: "true",
        hidden: "false",
        styleVariant: "solid",
        border: "",
      },
      string1: {
        type: "string",
        // label Props
        label: "Label",
        labelAlign: "left", // "left" | "right"
        labelCaption: "Label Caption", // helper text
        labelPosition: "left", // "left" | "top"
        labelWidth: "33",
        labelWidthUnit: "%", // "%" | "px" | "col"
        labelWrap: "false",
        hideLabel: "false",
        // Input Props
        value: "",
        placeholder: "Enter a value",
        textAfter: "",
        textBefore: "",
        iconAfter: "",
        iconBefore: "",
        inputTooltip: "Input Tooltip",
        spellCheck: "false",
        autoComplete: "false",
        // autoFill: "", // "name" | "honorific-prefix" | "given-name" | "additional-name"
        autoCapitalize: "none", // "none" | "sentences" | "words" | "characters",
        readOnly: "false",
        loading: "false",
        disabled: "false",
        formDataKey: "",
        // patternType: "", // "email" | "regex" | "url"
        pattern: "", // when pattern type regex
        minLength: "", // null | number
        maxLength: "", // null | number
        required: "false",
        margin: "4px 8px",
        showClear: "true",
        showCharacterCount: "true",
        hideValidationMessage: "false",
        // maintainSpaceWhenHidden: "false",
        // showInEditor: "false",
        hidden: "false",
        // Tooltip Props
        tooltipText: "",
      },
    },
  },
};
