import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Title from "../src/components/Title.jsx";

describe("Title", () => {
	test("Check is Title render correct", () => {
		const router = createMemoryRouter(
			[{ path: "/", element: <Title text='Title' /> }],
			{
				initialEntries: ["/"]
			}
		);

		render(<RouterProvider router={router} />);

		const title = screen.getByText(/Title/i);
		expect(title).toBeVisible();
	});
});
