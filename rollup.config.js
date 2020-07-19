import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
};
