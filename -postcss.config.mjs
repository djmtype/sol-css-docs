import postcssPresetEnv from "postcss-preset-env";
import postcssImport from "postcss-import";
import autoprefixer from "autoprefixer";
import postcssInput from "postcss-input-range";

export default {
  plugins: [
    postcssImport(),
    postcssInput(),
    postcssPresetEnv({
      stage: 2,
      autoprefixer: true,
      features: {
        "case-insensitive-attributes": false,
        "logical-properties-and-values": false,
        "prefers-color-scheme-query": false,
        "gap-properties": false,
        "custom-properties": false,
        'place-properties': false,
        'not-pseudo-class': false,
        "dir-pseudo-class": false,
        "focus-within-pseudo-class": false,
        "focus-visible-pseudo-class": false,
        "color-functional-notation": false,
        'double-position-gradients': false,
        'light-dark-function': false,
        'oklab-function': false,
        'is-pseudo-class': false,
        'color-mix': false,
        'cascade-layers': false,
        'nested-calc': false,
        'nesting-rules': false,
      },
    }),
    autoprefixer(),
  ],
};
