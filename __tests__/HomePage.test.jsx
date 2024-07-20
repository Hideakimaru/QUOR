import HomePage from "../src/components/HomePage.jsx";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("HomePage", () => {
	test("Check if logo redirect on /", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter initialEntries={["/"]}>
					<Routes>
						<Route path='/' element={<HomePage />} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);

		const logo = screen.getAllByText(/QUOR/i);
		expect(logo[0]).toBeInTheDocument();

		await userEvent.click(logo[0]);

		const homePageTitle = await screen.findByText(/Welcome to/i);
		expect(homePageTitle).toBeInTheDocument();
	});

	test("Check if page contain texts", () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<HomePage />
				</MemoryRouter>
			</ThemeProvider>
		);

		const title = screen.getByText(/Welcome to/i);
		expect(title).toBeInTheDocument();

		const name = screen.getAllByText(/Quor/i);
		expect(name[1]).toBeInTheDocument();

		const logoText = screen.getAllByText(/QUOR/i);
		expect(logoText[0]).toBeInTheDocument();
	});

	test("Check button changes the state when hovered", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<HomePage />
				</MemoryRouter>
			</ThemeProvider>
		);
		const btn = screen.getByTestId("GetStartedBtn");

		expect(btn).toHaveClass("bg-slate-950");

		await userEvent.hover(btn);

		expect(btn).toHaveClass("hover:bg-gradient-to-r");
		expect(btn).toHaveClass("hover:from-purple-500");
		expect(btn).toHaveClass("hover:to-green-500");
	});

	test("Check button redirect to the /app router", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter initialEntries={["/"]}>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/app' element={<div>App Page</div>} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);

		const btn = screen.getByText("Get Started");
		expect(btn).toBeInTheDocument();

		await userEvent.click(btn);

		const appPage = await screen.findByText("App Page");
		expect(appPage).toBeInTheDocument();
	});
});
