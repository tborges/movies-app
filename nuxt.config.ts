import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
	/*
	 ** Nuxt modules
	 */
	modules: [
		// https://tailwindcsss.nuxtjs.org
		"@nuxtjs/tailwindcss",
	],
	tailwindcss: {
		// add '~tailwind.config` alias
		exposeConfig: true,
	},
	ssr: false,
});
