import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, test } from "vitest";
import TermsAndConditions from "../src/components/TermsAndConditions.jsx";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("TermsAndConditions", () => {
	test("Check is privacy commponent is visible", () => {
		const router = createMemoryRouter(
			[{ path: "/terms-and-conditions", element: <TermsAndConditions /> }],
			{ initialEntries: ["/terms-and-conditions"] }
		);

		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const title = screen.getByTestId("mainTitle");
		expect(title).toBeVisible();
	});

	test("Check is agree btn redirect to correct route", async () => {
		const router = createMemoryRouter(
			[
				{ path: "/terms-and-conditions", element: <TermsAndConditions /> },
				{ path: "/", element: <div>Page Home</div> }
			],
			{ initialEntries: ["/terms-and-conditions"] }
		);

		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const agreeBtn = screen.getByText(/Yes, I'm agree/i);
		expect(agreeBtn).toBeVisible();

		await userEvent.click(agreeBtn);

		const expectedPage = await screen.findByText(/Page Home/i);
		expect(expectedPage).toBeVisible();
	});

	test("Check is links follow to correct page", () => {
		const router = createMemoryRouter(
			[{ path: "/terms-and-conditions", element: <TermsAndConditions /> }],
			{ initialEntries: ["/terms-and-conditions"] }
		);

		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const links = screen.getAllByText(/quor.assist@gmail.com/i);
		links.forEach(link => {
			expect(link).toBeVisible();
			expect(link).toHaveAttribute("href", "mailto:quor.assist@gmail.com");
		});
	});
});
