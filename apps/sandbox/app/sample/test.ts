export const schema = {
  fragment1: {
    type: "fragment",
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
};
