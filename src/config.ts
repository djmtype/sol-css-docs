export const SITE = {
  title: "SOL CSS",
  description: "CSS without the FUSS",
  defaultLanguage: "en-us",
  url: "https://cssol.netlify.app/",
  analyticsId: "G-xxx"
} as const;


export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  // twitter: "astrodotbuild",
};


export type DocsNav = Record<string, { text: string; link: string }[]>


export const DOCS_NAV: DocsNav = {
  "Getting Started": [
    { text: "Intro", link: "docs/intro" },
    { text: "Settings", link: "docs/settings" }
  ],
  Elements: [
    { text: "Color", link: "docs/color" },
    { text: "Spacing", link: "docs/spacing" },
     { text: "Typography", link: "docs/typography" },
  ],
  Components: [
    { text: "Buttons", link: "docs/buttons" },
    { text: "Details", link: "docs/details" },
    { text: "Dialog", link: "docs/dialog" },
    { text: "Images", link: "docs/images" },
    { text: "Forms", link: "docs/forms" },
    { text: "Progress", link: "docs/progress" },
    { text: "Tables", link: "docs/tables" },
  ],
};



export type MainNav = Record<string, { text: string; link: string }[]>

export const MAIN_NAV: MainNav = {
    "Main Navigation": [
      { text: "Home", link: "" },
      { text: "Docs", link: "docs/intro" },
      // { text: "Demo", link: "blog" },
    ],
};

