const { withNx } = require("@nx/rollup/with-nx");
const preserveDirectives = require("rollup-plugin-preserve-directives");
const terser = require("@rollup/plugin-terser");
const copy = require("rollup-plugin-copy");
const pkg = require("./package.json");

const config = withNx(
  {
    main: "./src/index.ts",
    outputPath: "./dist",
    tsConfig: "./tsconfig.lib.json",
    compiler: "swc",
    format: ["cjs", "esm"],
    external: Object.keys(pkg.peerDependencies),
  },
  {
    input: "./src/index.ts",
    output: { preserveModules: true },
    plugins: [
      preserveDirectives.default(), // For preserving "use client" directives
      copy({
        hook: "writeBundle",
        targets: [
          {
            src: ["./dist/*.d.ts"],
            dest: "./dist",
            rename: (name, extension) => `${name}.c${extension}`,
          },
          {
            src: ["./dist/*.d.ts"],
            dest: "./dist",
            transform: (contents, filename) =>
              contents
                .toString()
                .replace(
                  /export \* from "(\.\/src\/[a-z]+)";/g,
                  'export * from "$1.js";',
                ),
          },
        ],
      }),
      terser(), // For minification
    ],
  },
);

config.output = config.output.map((output) => {
  const ext = output.format === "cjs" ? "cjs" : "js";
  output.entryFileNames = `[name].${ext}`;
  output.chunkFileNames = `[name].${ext}`;
  return output;
});

config.plugins = config.plugins.filter(
  (plugin) => plugin.name !== "rollup-plugin-nx-generate-package-json",
);

module.exports = config;
