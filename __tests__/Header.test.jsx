import { render, screen } from "@testing-library/react";
import { test, describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header.jsx";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("App", () => {
	test("Check is header defined", () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const header = screen.getByTestId("header");
		expect(header).toBeVisible();
	});

	test("Check is MovieFilter visible in Logo", () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const MovieFilter = screen.getByTestId("MovieFilter");
		expect(MovieFilter).toBeVisible();
	});

	test("Check is Logo text visible", () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);
		const logoText = screen.getByText(/QUOR/i);
		expect(logoText).toBeVisible();
	});

	test("Check is Logo change state on hover", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const logo = screen.getByTestId("logo");
		expect(logo).toBeVisible();

		await userEvent.hover(logo);

		expect(logo).toHaveClass("hover:opacity-80");
	});

	test("Check is Logo redirect to HomePage", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter initialEntries={["/app"]}>
					<Routes>
						<Route path='/' element={<div>Test Redirect</div>} />
						<Route path='/app' element={<Header />} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);

		const logo = screen.getByTestId("logo");
		expect(logo).toBeVisible();

		await userEvent.click(logo);

		const expectedPage = await screen.findByText(/Test Redirect/i);
		expect(expectedPage).toBeInTheDocument();
	});

	test("Check is navigation texts is visible", () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const navItem1 = screen.getByText(/add/i);
		expect(navItem1).toBeVisible();

		const navItem2 = screen.getByText(/my list/i);
		expect(navItem2).toBeVisible();
	});

	test("Check is navigation links change state on hover", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const navItem1 = screen.getByText(/add/i);
		expect(navItem1).toBeVisible();
		expect(navItem1).toHaveClass("text-white");

		await userEvent.hover(navItem1);

		expect(navItem1).toHaveClass("hover:text-custom-green");

		const navItem2 = screen.getByText(/my list/i);
		expect(navItem2).toBeVisible();
		expect(navItem2).toHaveClass("text-white");

		await userEvent.hover(navItem2);

		expect(navItem2).toHaveClass("hover:text-custom-green");
	});

	test("Check is navItems change active state", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</ThemeProvider>
		);

		const navItem1 = screen.getByTestId("navItem1");
		expect(navItem1).toBeVisible();

		const navItem2 = screen.getByTestId("navItem2");
		expect(navItem2).toBeVisible();

		await userEvent.click(navItem2);

		expect(navItem2).toHaveStyle({ borderBottom: "4px solid #2ecc71" });
		expect(navItem2).toHaveStyle({ backgroundColor: "#1e293b" });

		await userEvent.click(navItem1);

		expect(navItem1).toHaveStyle({ borderBottom: "4px solid #2ecc71" });
		expect(navItem1).toHaveStyle({ backgroundColor: "#1e293b" });
	});

	test("Check is navItems2 redirect to the /app/my-list route", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter initialEntries={["/app"]}>
					<Routes>
						<Route path='/app' element={<Header />} />
						<Route path='/app/my-list' element={<div>Page My List</div>} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);

		const navItem2 = screen.getByTestId("navItem2");
		expect(navItem2).toBeVisible();

		await userEvent.click(navItem2);

		const resultText = await screen.findByText(/Page My List/i);
		expect(resultText).toBeVisible();
	});

	test("Check is navItems1 redirect back to the /app route", async () => {
		render(
			<ThemeProvider>
				<MemoryRouter initialEntries={["/app/my-list"]}>
					<Routes>
						<Route path='/app/my-list' element={<Header />} />
						<Route path='/app' element={<div>Page App</div>} />
					</Routes>
				</MemoryRouter>
			</ThemeProvider>
		);

		const navItem1 = screen.getByTestId("navItem1");
		expect(navItem1).toBeVisible();

		await userEvent.click(navItem1);

		const resultText = await screen.findByText(/Page App/i);
		expect(resultText).toBeVisible();
	});
});
