/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,jsx}', './index.html'],
	theme: {
		fontFamily: {
			poppins: ['Poppins', 'Helvetica', 'sans-serif'],
			roboto: ['Roboto', 'Helvetica', 'sans-serif']
		},
		extend: {
			colors: {
				'custom-green': '#2ecc71',
				'custom-orange': '#f39c12'
			},
			top: {
				'm-14': '-3.5rem'
			},
			margin: {
				'0a': '0 auto'
			},
			maxWidth: {
				'596px': '596px',
				'350px': '350px'
			},
			height: {
				'500px': '500px'
			}
		}
	},
	plugins: []
};
