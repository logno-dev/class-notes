// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://class.logno.dev",
    integrations: [
        starlight({
            title: "Class Notes",
            customCss: ["./src/styles/custom.css"],
        }),
        sitemap(),
        mdx(),
    ],
});
