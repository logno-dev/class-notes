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
            editLink: {
                baseUrl: "https://github.com/logno-dev/class-notes/tree/main",
            },
            sidebar: [
                {
                    label: "Get Started",
                    link: "",
                },
                {
                    label: "Lessons",
                    items: [
                        {
                            label: "How to start coding",
                            link: "lessons/how-to-start-coding",
                        },
                        {
                            label: "Basic Javascript",
                            link: "lessons/basic-javascript",
                        },
                        {
                            label: "Loops",
                            link: "lessons/loops",
                        },
                        {
                            label: "Scope",
                            link: "lessons/scope",
                        },
                        {
                            label: "If Statements",
                            link: "lessons/if",
                        },
                        {
                            label: "Operators",
                            link: "lessons/operators",
                        },
                        "lessons/todo",
                        {
                            label: "Path: Web Dev",
                            items: [
                                {
                                    label: "Introduction",
                                    link: "lessons/webdev/intro",
                                },
                                {
                                    label: "HTML",
                                    link: "lessons/webdev/html",
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
        sitemap(),
        mdx(),
    ],
});
