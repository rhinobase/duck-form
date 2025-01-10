const { withNx } = require("@nx/rollup/with-nx");
const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");
const pkg = require("./package.json");

module.exports = async () => {
  return withNx(
    {
      main: "./src/index.ts",
      outputPath: "../../dist/packages/fields",
      tsConfig: "./tsconfig.lib.json",
      compiler: "swc",
      format: ["cjs", "esm"],
      assets: [{ input: "./packages/fields", output: ".", glob: "README.md" }],
      external: Object.keys(pkg.peerDependencies),
    },
    {
      input: "./src/index.ts",
      output: { preserveModules: true },
      plugins: [
        preserveDirectives.default(), // For preserving "use client" directives
        terser(), // For minification
      ],
    },
  );
};
