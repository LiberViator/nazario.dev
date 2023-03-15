/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["Montserrat", "sans-serif", "system-ui"],
			display: ["Nothing You Could Do", "cursive", "system-ui"],
		},
		fontSize: {
			h1: ["3rem", { lineHeight: "125%", fontWeight: "400" }],
			h2: ["1.5rem", { lineHeight: "150%", fontWeight: "400" }],
			h3: ["1.375rem", { lineHeight: "125%", fontWeight: "400" }],
			h4: ["1.125rem", { lineHeight: "125%", fontWeight: "600" }],
			h5: ["1.125rem", { lineHeight: "125%", fontWeight: "400" }],
			p: ["1.125rem", { lineHeight: "175%", fontWeight: "400" }],
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
				"hero-gradient":
					"radial-gradient(720px at 72% 40%, rgba(51, 65, 85, 0.88) 0%, #1e293b 100%)",
				"contact-gradient":
					"radial-gradient(720px at 100% 100%, rgba(51, 65, 85, 0.5) 0%, rgba(18, 25, 40, 0) 100%)",
				"form-gradient":
					"linear-gradient(theme('colors.slate.700') 80%, #1e293b 100%)",
			},
			dropShadow: {
				portrait: "-16px 16px 32px rgba(0, 0, 0, 0.4)",
			},
			boxShadow: {
				"glow-yellow": "0px 0px 32px rgba(253, 224, 71, 0.16)",
				"glow-blue": "0px 0px 32px rgba(147, 197, 253, 0.16)",
				container:
					"4px 4px 8px rgba(0, 0, 0, 0.08), 8px 8px 16px rgba(0, 0, 0, 0.08)",
				form: "8px 8px 16px rgba(0, 0, 0, 0.08), 16px 16px 32px rgba(0, 0, 0, 0.08)",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
		require("tailwindcss-intersect"),
	],
};
