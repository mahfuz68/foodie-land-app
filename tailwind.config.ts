import type { Config } from 'tailwindcss';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-blue': 'rgb(var(--light-blue) / <alpha-value>)',
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
			},
		},
	},
	plugins: [],
} satisfies Config;
