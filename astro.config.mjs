import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://thehardwaremafia.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
