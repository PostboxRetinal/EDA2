/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-slow': 'spin 3s linear infinite',
			},
			boxShadow: {
				'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
