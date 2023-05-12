import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";

export default defineConfig({
	site: "https://nazario.dev/",
	integrations: [tailwind(), compress()],
});
