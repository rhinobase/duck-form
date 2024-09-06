const { createGlobPatternsForDependencies } = require("@nx/react/tailwind");
const { join } = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		join(__dirname, "{components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
		...createGlobPatternsForDependencies(__dirname),
		"../../node_modules/@rafty/{ui,corp}/**/*.js",
	],
	theme: {
		extend: {},
	},
	plugins: [require("@rafty/plugin")],
};
