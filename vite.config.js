import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/QUOR/",
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["./vitest.setup.js"],
		coverage: {
			reporter: ["text", "json", "html"]
		}
	}
});
