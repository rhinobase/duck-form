const { withNx } = require("@nx/rollup/with-nx");
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
		plugins: [terser()],
	},
);
