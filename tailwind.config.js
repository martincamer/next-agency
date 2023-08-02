/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFFFF',
				secondary: '#F3F3F3',
				terciary: '#111111',
				fourty: '#6C6C6C',
				five: '#6C6C6C',
				six: '#F7F7FC',
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'translateY(5px)' },
					'50%': { transform: 'translateY(0px)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
