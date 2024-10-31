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
    { text: "Intro", link: "docs/getting-started/intro" },
    { text: "Settings", link: "docs/getting-started/settings" }
  ],
  Elements: [
    { text: "Color", link: "docs/elements/color" },
    { text: "Spacing", link: "docs/elements/spacing" },
     { text: "Typography", link: "docs/elements/typography" },
  ],
  Components: [
    { text: "Buttons", link: "docs/components/buttons" },
    { text: "Details", link: "docs/components/details" },
    { text: "Dialog", link: "docs/components/dialog" },
    { text: "Images", link: "docs/components/images" },
    { text: "Forms", link: "docs/components/forms" },
    { text: "Progress", link: "docs/components/progress" },
    { text: "Tables", link: "docs/components/tables" },
  ],
};



export type MainNav = Record<string, { text: string; link: string }[]>

export const MAIN_NAV: MainNav = {
    "Main Navigation": [
      { text: "Home", link: "" },
      { text: "Docs", link: "docs/getting-started/intro" },
      // { text: "Demo", link: "blog" },
    ],
};

