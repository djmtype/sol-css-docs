const postcssPresetEnv = require("postcss-preset-env");
// const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const postcssInput = require("postcss-input-range");

// const combineSelectors  = require('postcss-combine-duplicated-selectors');
// const tailwind = require('@tailwindcss/postcss')

module.exports = {
  plugins: [
    postcssImport(),
    postcssInput(),
    postcssPresetEnv({

      stage: 2,
      // minimumVendorImplementations: 1,
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
        'focus-visible-pseudo-class': false,
        'focus-within-pseudo-class': false,
        'not-pseudo-class': false,
        'cascade-layers': false,
        'nested-calc': false,
        'nesting-rules': false,
  
        // "has-pseudo-class": false
        // 'oklab-function': {
        //   preserve: true,
        //   enableProgressiveCustomProperties: false,
        //   subFeatures: {
        //     displayP3: false
        //   }
        // },
      },
      
    }),
    // tailwind,
    autoprefixer()
  ]
}