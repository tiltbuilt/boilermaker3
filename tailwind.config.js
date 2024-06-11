import('tailwindcss').Config
const colors = require('tailwindcss/colors')
module.exports = {  
  plugins: [	
	require('@tailwindcss/aspect-ratio'),
	require('@tailwindcss/typography'),
	require('@tailwindcss/forms'),	
  ],
  content: [
	'./templates/**/*.{html,twig}', './src/**/*.{pcss,css,js}'
  ],
  theme: {
	container: {
	  center: true,
	},
	extend: {
	  minHeight: {
		'screenh' : '100vh',
	  },
	  aspectRatio: {
		'4/3': '4/3',
		'3/2': '3/2',
		'3/1': '3/1',
		'2/1': '2/1',
		'4/1': '4/1',  
	  },
	},
	colors: {
	  transparent: 'transparent',
	  current: 'currentColor',
	  black: '#000',
	  white: '#fff',
	  red: '#ff0000',
	  gray: colors.gray,      
	},
	opacity: {
	  '0': '0',
	  '10': '0.1',
	  '20': '0.2',
	  '30': '0.3',
	  '40': '0.4',
	  '50': '0.5',
	  '60': '0.6',
	  '70': '0.7',
	  '80': '0.8',
	  '90': '0.9',
	  '100': '1',
	},
	fontFamily: {
	  
	},
  },
};