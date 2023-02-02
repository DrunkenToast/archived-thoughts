import { defineConfig } from "astro/config";
import remarkCodeTitles from "remark-code-titles";
import remarkGemoji from "remark-gemoji";
import gruvboxDarkMedium from "./gruvbox-dark-medium.json"

// https://astro.build/config
export default defineConfig({
    site: 'https://drunkentoast.github.io',
    base: 'archived-thoughts',
    markdown: {
        shikiConfig: {
            theme: {
                name: "Gruvbox Dark Medium",
                settings: gruvboxDarkMedium.tokenColors
            },
            wrap: true,
        },
        remarkPlugins: [
            remarkGemoji,
            remarkCodeTitles
        ]
    },
});
