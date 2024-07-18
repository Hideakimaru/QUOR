import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, test } from "vitest";
import PrivacyPolicy from "../src/components/PrivacyPolicy.jsx";
import userEvent from "@testing-library/user-event";

describe("PrivacyPolicy", () => {
	test("Check is privacy commponent is visible", () => {
		const router = createMemoryRouter(
			[{ path: "/privacy-policy", element: <PrivacyPolicy /> }],
			{ initialEntries: ["/privacy-policy"] }
		);

		render(<RouterProvider router={router} />);

		const title = screen.getByTestId("mainTitle");
		expect(title).toBeVisible();
	});

	test("Check is agree btn redirect to correct route", async () => {
		const router = createMemoryRouter(
			[
				{ path: "/privacy-policy", element: <PrivacyPolicy /> },
				{ path: "/", element: <div>Page Home</div> }
			],
			{ initialEntries: ["/privacy-policy"] }
		);

		render(<RouterProvider router={router} />);

		const agreeBtn = screen.getByText(/I'm agree/i);
		expect(agreeBtn).toBeVisible();

		await userEvent.click(agreeBtn);

		const expectedPage = await screen.findByText(/Page Home/i);
		expect(expectedPage).toBeVisible();
	});

	test("Check is links follow to correct page", () => {
		const router = createMemoryRouter(
			[{ path: "/privacy-policy", element: <PrivacyPolicy /> }],
			{ initialEntries: ["/privacy-policy"] }
		);

		render(<RouterProvider router={router} />);

		const links = screen.getAllByText(/mywatchlist.support@gmail.com/i);
		links.forEach(link => {
			expect(link).toBeVisible();
			expect(link).toHaveAttribute(
				"href",
				"mailto:mywatchlist.support@gmail.com"
			);
		});
	});
});
