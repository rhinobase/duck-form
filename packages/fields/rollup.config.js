const { withNx } = require("@nx/rollup/with-nx");
const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");

module.exports = withNx(
  {
    main: "./src/index.ts",
    outputPath: "../../dist/packages/fields",
    tsConfig: "./tsconfig.lib.json",
    compiler: "swc",
    external: ["react", "react-dom", "react/jsx-runtime"],
    format: ["cjs", "esm"],
    assets: [{ input: ".", output: ".", glob: "README.md" }],
  },
  {
    plugins: [
      preserveDirectives.default(), // For preserving "use client" directives
      terser(), // For minification
    ],
  },
);
