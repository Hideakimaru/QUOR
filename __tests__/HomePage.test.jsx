import HomePage from "../src/components/HomePage.jsx";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("HomePage", () => {
	test("Check if logo redirect on /", async () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</MemoryRouter>
		);

		const logo = screen.getByText(/MWL/i);
		expect(logo).toBeInTheDocument();

		await userEvent.click(logo);

		const homePageTitle = await screen.findByText(/Welcome to/i);
		expect(homePageTitle).toBeInTheDocument();
	});

	test("Check if page contain texts", () => {
		render(
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>
		);

		const title = screen.getByText(/Welcome to/i);
		expect(title).toBeInTheDocument();

		const name = screen.getByText(/My Watch List/i);
		expect(name).toBeInTheDocument();

		const logoText = screen.getByText(/MWL/i);
		expect(logoText).toBeInTheDocument();
	});

	test("Check button changes the state when hovered", async () => {
		render(
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>
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
			<MemoryRouter initialEntries={["/"]}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/app' element={<div>App Page</div>} />
				</Routes>
			</MemoryRouter>
		);

		const btn = screen.getByText("Get Started");
		expect(btn).toBeInTheDocument();

		await userEvent.click(btn);

		const appPage = await screen.findByText("App Page");
		expect(appPage).toBeInTheDocument();
	});

	test("Check if MovieIcon is present", () => {
		render(
			<MemoryRouter>
				<HomePage />
			</MemoryRouter>
		);

		const movieIcon = screen.getByTestId("MovieIcon");
		expect(movieIcon).toBeInTheDocument();
	});
});
