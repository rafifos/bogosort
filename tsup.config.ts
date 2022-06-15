import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    minify: !options.watch,
    dts: true,
    sourcemap: true,
    clean: true,
  };
});
