/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx}", "./index.html"],
	darkMode: "class",
	theme: {
		fontFamily: {
			poppins: ["Poppins", "Helvetica", "sans-serif"],
			roboto: ["Roboto", "Helvetica", "sans-serif"],
			poetsen: ["Poetsen One", "Helvetica", "sans-serif"]
		},
		extend: {
			screens: {
				tall: { raw: "(min-height: 1024px) " }
			},
			animation: {
				showing: "showing 1s ease-in-out"
			},
			keyframes: {
				showing: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 }
				}
			},
			opacity: {
				87: ".87",
				38: ".38",
				67: ".67"
			},
			colors: {
				"custom-green": "#2ecc71",
				"custom-orange": "#f39c12",
				"custom-black": "#121212",
				"custom-dark-gray": "#282828",
				"custom-gray": "#3f3f3f"
			},
			top: {
				"m-14": "-3.5rem"
			},
			margin: {
				"0a": "0 auto"
			},
			maxWidth: {
				"596px": "596px",
				"350px": "350px"
			},
			height: {
				"500px": "500px"
			}
		}
	},
	plugins: []
};
