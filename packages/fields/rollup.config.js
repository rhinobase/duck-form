const { withNx } = require("@nx/rollup/with-nx");
const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");
const fg = require("fast-glob");

module.exports = async () => {
  const inputs = await fg("./src/**/*.{ts,tsx}", {
    onlyFiles: true,
    cwd: __dirname,
  });

  return withNx(
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
      input: inputs,
      output: { preserveModules: true },
      plugins: [
        preserveDirectives.default(), // For preserving "use client" directives
        terser(), // For minification
      ],
    },
  );
};
