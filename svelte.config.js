import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import("@sveltejs/kit").Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: ["*"]
		}
	},
	
	compilerOptions: {
		warningFilter: (warning) => !warning.code.startsWith("a11y")
	}
};

export default config;
