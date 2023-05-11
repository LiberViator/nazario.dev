import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import compress from "astro-compress";

export default defineConfig({
	site: "https://nazario.dev/",
	integrations: [tailwind(), alpinejs(), compress()],
});
