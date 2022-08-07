const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	mode: 'jit',
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	safelist: ['mx-16', 'px-16', 'ml-18', 'ml-64', 'ml-128', 'pl-12', 'py-10', 'z-10'],

	theme: {
		fontFamily: {
			body: ['Graphik', 'sans-serif'],
			'weight-regular': ['Graphik', 'serif'],
			'weight-semibold': ['Graphik Semibold', 'serif'],
			'weight-medium': ['Graphik Medium', 'serif'],
		},
		fontSize: {
			// 'xs': [''],
			sm: [
				'12px',
				{
					lineHeight: '18px',
				},
			],
			md: [
				'14px',
				{
					lineHeight: '20px',
				},
			],
			lg: [
				'16px',
				{
					lineHeight: '22px',
				},
			],
			xl: [
				'18px',
				{
					lineHeight: '24px',
				},
			],
			'2xl': [
				'20px',
				{
					lineHeight: '26px',
				},
			],
			'3xl': [
				'36px',
				{
					lineHeight: '48px',
				},
			],
			'4xl': [
				'48px',
				{
					lineHeight: '64px',
				},
			],
			'5xl': [
				'60px',
				{
					lineHeight: '72px',
				},
			],
		},
		extend: {
			colors: {
				white: '#fff',
				gray: {
					50: '#F7F7F8',
					100: '#F2F2F4',
					200: '#EAE9EB',
					300: '#D9D8DB',
					400: '#A2A7B2',
					500: '#91959E',
					600: '#797D85',
					700: '#68686D',
					800: '#4F4F55',
					900: '#1C1D20',
				},
				blue: {
					DEFAULT: '#0779F4',
					50: '#F2F8FE',
					100: '#E6F1FD',
					200: '#CDE4FD',
					300: '#B4D6FB',
					400: '#6AAFF8',
					500: '#2C8DF5',
					600: '#0779F4',
					700: '#0566CF',
					800: '#044E9E',
					900: '#033C79',
				},
				red: {
					light: '#FEE2E3', // 100
					medium: '#FCA6A5', // 300
					dark: '#DB2626', // 600
				},
				green: {
					light: '#E8F6ED', // 100
					medium: '#B1E1C2', // 300
					dark: '#1EA94F', // 600
				},

				// Status
				valid: {
					light: '#E8F6ED', // 100 - green
					medium: '#B1E1C2', // 300 - green
					dark: '#1EA94F', // 600 - green
				},
				warning: {
					light: '#FEF7F2', // 100 - orange
					medium: '#FCD6C0', // 300 - orange
					dark: '#F8A675', // 600 - orange
				},
				error: {
					light: '#FEE2E3', // 100 - red
					medium: '#FCA6A5', // 300 - red
					dark: '#DB2626', // 600 - red
				},
				// info: {
				// 	light: '', // 100 - blue
				// 	medium: '', // 300 - blue
				// 	dark: '', // 600 - blue
				// },

				// STRM brand colors
				brand: {
					blue: {
						light: '#FAFAFD',
						DEFAULT: '#0003A2',
					},
					orange: {
						light: '#FFFCFA',
						DEFAULT: '#F25C03',
					},
				},

				// Colors for theming, not relevant for assignment
				theme: {
					text: '#fff',
					background: '#0003A2',
					navigation: {
						logo: '#fff',
						button: {
							hover: '#fff',
						},
					},
				},
			},
			textColor: {
				body: '#1C1D20',
				heading: '#1C1D20',
				link: '#0779F4', // Blue
				muted: '#91959E',
				button: {
					DEFAULT: '#fff',
				},

				// white: '#fff',
				// error: '#e25366',
				// valid: '#00b706',
			},
			backgroundColor: {
				body: '#fff',
			},
			opacity: {
				'theme-navigation-button-hover': '0.2',
			},
			borderColor: {
				DEFAULT: '#EAE9EB',
			},
			placeholderColor: {
				DEFAULT: '#91959E',
			},
			height: {
				18: '4.5rem',
			},
			spacing: {
				4.5: '1.125rem',
				12: '3rem',
				18: '4.5rem',
				128: '32rem',
			},
			padding: {
				12: '3rem',
			},
			transitionDuration: {
				default: '250ms',
			},
		},
	},
	variants: {
		// 	extend: {
		// 		textColor: ['responsive', 'hover', 'group-hover', 'focus', 'group-hover'],
		// 		borderColor: ['responsive', 'hover', 'group-hover', 'focus', 'group-hover'],
		// 		opacity: ['hover', 'group-hover'],
		// 		outline: ['focus'],
		// 		// backgroundColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'active'],
		// 	},
	},
	plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
