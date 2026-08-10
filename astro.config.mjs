import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
// import { satteri } from '@astrojs/markdown-satteri';
import mdx from "@astrojs/mdx";
// import { SITE } from "./src/config";

import browserslist from "browserslist";
import { browserslistToTargets, Features } from "lightningcss";

// import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // site: SITE.url,
  site: "https://cssol.netlify.app",
  compressHTML: true,
  integrations: [mdx()],

  markdown: {
    processor: unified(),
    // processor: satteri(),
  },

  vite: {
    // plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(
          browserslist("baseline widely available"),
        ),
        // exclude: Features.LabColors | Features.P3Colors,
        // exclude: Features.Nesting | Features.OklabColors | Features.ColorFunction,
        exclude:
          Features.VendorPrefixes |
          Features.MediaRangeSyntax |
          Features.Selectors,
        // minify: false,
        // sourceMap: true,
      },
    },
    build: {
      cssMinify: "lightningcss",
      // cssMinify: true,
      // sourcemap: true
    },
  },
});
