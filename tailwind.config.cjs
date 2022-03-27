const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				anton: "'Anton', sans-serif",
				serif: ["'Merriweather', serif", ...defaultTheme.fontFamily.serif]
			}
		}
	},

	plugins: []
};

module.exports = config;
