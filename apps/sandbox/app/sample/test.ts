export const schema = {
  fragment1: {
    type: "fragment",
    blocks: {
      div1: {
        type: "div",
        blocks: {
          literal1: {
            type: "literal",
            value: "Hello, world!",
          },
        },
      },
    },
  },
};
