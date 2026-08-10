import { defineConfig } from "astro/config";


// import { SITE } from "./src/config";
import AutoImport from "astro-auto-import";
import browserslist from "browserslist";
import { browserslistToTargets, Features } from "lightningcss";

import mdx from "@astrojs/mdx";

// import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  // site: SITE.url,
  site: "https://cssol.netlify.app/",
  compressHTML: true,
  integrations: [AutoImport({
    imports: ["./src/components/CodeComponent.astro"],
  }), mdx()],

  //



  vite: {
    // plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(
          browserslist("baseline widely available"),
        ),
        include: Features.Nesting,
        // exclude: Features.LabColors | Features.P3Colors,
        exclude: Features.OklabColors | Features.ColorFunction,
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
