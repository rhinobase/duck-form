export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      div1: {
        type: "div",
        blocks: {
          text3: {
            type: "text",
            value: "{{ components.string2.value }}",
          },
        },
      },
      string1: {
        type: "string",
        value: "field 1",
      },
      text1: {
        type: "text",
        value: "{{ components.string1.value }}",
      },
      string2: {
        type: "string",
        value: "field 2",
      },
      div2: {
        type: "div",
        blocks: {
          text4: {
            type: "text",
            value: "This value is inside div",
          },
          text2: {
            type: "text",
            value: "{{ components.string2.value }}",
          },
        },
      },
    },
  },
};
