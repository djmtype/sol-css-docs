import { defineConfig } from 'astro/config';
import { SITE } from "./src/config";
import AutoImport from "astro-auto-import";
// import { Features } from "lightningcss"
import mdx from '@astrojs/mdx';
// import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  compressHTML: false,
  integrations: [
    
    AutoImport({
      imports: [
        "./src/components/CodeComponent.astro",
        "./src/components/Details.astro",
        "./src/components/Buttons.astro",
        "./src/components/Dialog.astro",
        "./src/components/Images.astro",
        "./src/components/Table.astro",
        "./src/components/TableScroll.astro",
        "./src/components/Forms.astro",
        "./src/components/FormsInput.astro",
        "./src/components/Progress.astro",
        "./src/components/Docs/ColorPalette.astro",
      ],
    }),
    mdx({
      shikiConfig: {
        // Choose from Shiki's built-in themes (or add your own)
        // https://github.com/shikijs/shiki/blob/main/docs/themes.md
        theme: "css-variables",
        wrap: true,
      },
    }),
  ],

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: "css-variables",
      //  theme: 'ayu-dark',
      // Alternatively, provide multiple themes
      // See note below for using dual light/dark themes
      // themes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
      // Disable the default colors
      // https://shiki.style/guide/dual-themes#without-default-color
      // (Added in v4.12.0)
      // defaultColor: false,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // defaultColor: 'light',
  // defaultColor: false,  
//  cssVariablePrefix: '--astro-code-',
      // https://shiki.style/languages
      // langs: ['html', 'markdown'],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      // transformers: [],
    },
  },

  vite: {
    // plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
      // transformer: "lightningcss",
      // lightningcss: {
      //   // targets: browserslistToTargets(
      //   //   browserslist("last 2 major versions and not dead and > .25%")
      //   // ),
      //   include: Features.Nesting,
      //   // exclude: Features.LabColors | Features.P3Colors,
      //   exclude: Features.OklabColors | Features.ColorFunction,
      //   // minify: false,
      //   // sourceMap: true,
      // },
    },
    build: {
      // cssMinify: "lightningcss",
      cssMinify: false,
      // sourcemap: true
    },
  }
});