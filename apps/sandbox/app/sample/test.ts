export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      div1: {
        type: "div",
        blocks: {
          string1: {
            type: "string",
            value: "some",
          },
          text1: {
            type: "text",
            value: "{{ components.string1.value }}",
          },
        },
      },
    },
  },
};
