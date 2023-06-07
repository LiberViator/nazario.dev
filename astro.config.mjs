import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
	site: "https://nazario.dev/",
	output: "static",
	integrations: [tailwind(), compress(), svelte()],
});
