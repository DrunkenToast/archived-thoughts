import { defineConfig } from "astro/config";
import gruvboxDarkMedium from "./gruvbox-dark-medium.json"

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: {
                name: "Gruvbox Dark Medium",
                settings: gruvboxDarkMedium.tokenColors
            },
        },
    },
});
