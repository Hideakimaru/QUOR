import { createContext, useState, useEffect } from "react";
import { initializeTheme } from "./ThemeUtils";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "light"
	);

	useEffect(() => {
		initializeTheme();
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
