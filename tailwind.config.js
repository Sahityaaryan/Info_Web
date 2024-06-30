const colors = require('tailwindcss/colors');
const flowbite = require("flowbite-react/tailwind");

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		flowbite.content(),
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Light colors
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',

				// Dark colors
				'primary-dark': '#0D2438',
				'secondary-dark': '#102D44',
				'ternary-dark': '#1E3851',

				// Extended v3 color
				gray: colors.neutral,
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			  },
			  keyframes: {
				"accordion-down": {
				  from: { height: "0" },
				  to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
				  from: { height: "var(--radix-accordion-content-height)" },
				  to: { height: "0" },
				},
			  },
			  animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			  },
		},
	},
	plugins: [require('@tailwindcss/forms'),flowbite.plugin(),],
};
