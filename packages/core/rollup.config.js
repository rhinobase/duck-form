const { withNx } = require("@nx/rollup/with-nx");
const terser = require("@rollup/plugin-terser");

module.exports = withNx(
  {
    main: "./src/index.ts",
    outputPath: "../../dist/packages/core",
    tsConfig: "./tsconfig.lib.json",
    compiler: "swc",
    external: ["react", "react-dom", "react/jsx-runtime"],
    format: ["esm"],
    assets: [{ input: ".", output: ".", glob: "README.md" }],
  },
  {
    plugins: [terser()],
  },
);
