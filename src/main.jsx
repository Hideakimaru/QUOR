import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import HomePage from "./components/HomePage.jsx";
import WatchList from "./components/WatchList.jsx";
import AddToList from "./components/AddToList.jsx";
import { ThemeProvider } from "./components/utils/ThemeContext.jsx";

function initializeTheme() {
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

initializeTheme();

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <HomePage title='Welcome to MY WATCH LIST' />,
			errorElement: <ErrorBoundary />
		},
		{
			path: "app",
			element: <App />,
			errorElement: <ErrorBoundary />,
			children: [
				{
					path: "/app",
					element: <AddToList />,
					errorElement: <ErrorBoundary />
				},
				{
					path: "my-list",
					element: <WatchList />,
					errorElement: <ErrorBoundary />
				}
			]
		},
		{
			path: "privacy-policy",
			element: <PrivacyPolicy />,
			errorElement: <ErrorBoundary />
		},
		{
			path: "terms-and-conditions",
			element: <TermsAndConditions />,
			errorElement: <ErrorBoundary />
		}
	],
	{ basename: "/QUOR" }
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</ThemeProvider>
);
