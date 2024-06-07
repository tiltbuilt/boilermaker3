import('tailwindcss').Config
const colors = require('tailwindcss/colors')
module.exports = {
  corePlugins: {
	container: false,
  },
  plugins: [	
	require('@tailwindcss/typography'),
  ],
  content: [
	'./templates/**/*.twig',
  ],
  theme: {
	extend: {
	  minHeight: {
		'screenh' : '100vh',
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