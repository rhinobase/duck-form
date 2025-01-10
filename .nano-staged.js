module.exports = {
  "./**/*.{js,jsx,ts,tsx,json}": (api) =>
    `pnpm dlx @biomejs/biome check --apply ${api.filenames.join(" ")}`,
};
