import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import autoExternal from 'rollup-plugin-auto-external';
import css from 'rollup-plugin-css-only'

const external = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
];
const extensions = [".js", ".jsx", ".ts", ".tsx"];
const input = "src/index.tsx";

const plugins = [
  typescript({
    typescript: require("typescript"),
  }),
  css({output: "index.css"}),
  autoExternal(),
];

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: "esm",
      sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input,
    output: {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
    plugins,
    external,
  },
];
