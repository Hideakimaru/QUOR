import ErrorBoundary from "./components/ErrorBoundary.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage.jsx";
import AuthPage from "./components/AuthPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";
import TermsAndConditions from "./components/TermsAndConditions.jsx";
import WatchList from "./components/WatchList.jsx";
import AddToList from "./components/AddToList.jsx";

const router = createBrowserRouter([
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
		path: "auth",
		element: <AuthPage />,
		errorElement: <ErrorBoundary />
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
