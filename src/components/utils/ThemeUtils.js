export function initializeTheme() {
	const savedTheme = localStorage.getItem("theme");
	if (savedTheme) {
		document.documentElement.classList.toggle("dark", savedTheme === "dark");
	} else {
		const prefersDarkScheme = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;
		document.documentElement.classList.toggle("dark", prefersDarkScheme);
	}
}
