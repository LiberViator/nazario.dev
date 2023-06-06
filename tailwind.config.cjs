/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Montserrat", "sans-serif", "system-ui"],
			display: ["Nothing You Could Do", "cursive", "system-ui"],
		},
		fontSize: {
			sm: "0.875rem",
			base: "1.125rem",
			lg: "1.375rem",
			xl: "1.75rem",
			"2xl": "2.75rem",
			"3xl": "3.25rem",
		},
		extend: {
			animation: {
				heading: "0.6s 0.2s 1 normal ease-out headingAnim forwards",
				form: "0.6s 0.2s 1 normal ease-out formAnim forwards",
			},
			keyframes: {
				headingAnim: {
					"0%": { transform: "translateX(24px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
				formAnim: {
					"0%": { transform: "translateY(48px)" },
					"100%": { opacity: 1, transform: "translateX(0)" },
				},
			},
			backgroundImage: {
				"offer-gradient": "radial-gradient(80% 512% at 64% 16%, #475569 0%, #334155 100%)",
				"form-gradient": "linear-gradient(theme('colors.slate.700') 80%, #1e293b 100%)",
				"smooth-gradient": [
					"radial-gradient(1440px at 72% 12%, theme('colors.sky.200/16%') 0%, theme('colors.slate.900/0%') 100%)",
					"radial-gradient(1440px at 16% 56%, theme('colors.sky.200/8%') 0%, theme('colors.slate.900/0%') 100%)",
					"radial-gradient(1440px at 80% 96%, theme('colors.sky.200/12%') 0%, theme('colors.slate.900/0%') 100%)",
				],
			},
			dropShadow: {
				portrait: "-16px 16px 32px rgba(0, 0, 0, 0.4)",
			},
			boxShadow: {
				"glow-yellow": "0px 0px 32px theme('colors.yellow.200/16%')",
				"glow-blue": "0px 0px 32px theme('colors.blue.200/16%')",
				container: "4px 4px 8px rgba(0, 0, 0, 0.08), 8px 8px 16px rgba(0, 0, 0, 0.08)",
				form: "8px 8px 16px rgba(0, 0, 0, 0.08), 16px 16px 32px rgba(0, 0, 0, 0.08)",
			},
		},
	},
	plugins: [require("tailwind-scrollbar-hide"), require("tailwindcss-intersect")],
};
