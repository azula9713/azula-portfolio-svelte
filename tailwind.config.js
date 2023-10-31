/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#b25b6e',
				secondary: '#7c3042',
				tetriary: '#e8d2c9'
			}
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
