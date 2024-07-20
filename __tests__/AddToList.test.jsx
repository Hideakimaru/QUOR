import { render, screen } from "@testing-library/react";
import { describe, test, vi, expect } from "vitest";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import AddToList from "../src/components/AddToList.jsx";
import App from "../src/App.jsx";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("AddToList", () => {
	window.scrollTo = vi.fn();

	const router = createMemoryRouter(
		[
			{
				path: "/app",
				element: <App />,
				children: [
					{
						path: "/app",
						element: <AddToList />
					}
				]
			}
		],
		{
			initialEntries: ["/app"]
		}
	);

	test("Check is AddToList render correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const titleText = screen.getByText(/watch something new/i);
		expect(titleText).toBeVisible();

		const filterBtn = screen.getAllByTestId("FilterBtn");
		filterBtn.forEach(btn => {
			expect(btn).toBeVisible();
		});

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();
	});

	test("Check is SearchBar works correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const searchBar = screen.getByTestId("SearchBar");
		expect(searchBar).toBeVisible();

		await userEvent.click(searchBar);

		expect(searchBar).toHaveStyle({ borderColor: "#2ecc71" });

		await userEvent.keyboard("Kingdom");

		const clearSearchBtn = await screen.findByTestId("ClearSearchBtn");
		expect(clearSearchBtn).toBeVisible();

		await userEvent.click(clearSearchBtn);

		expect(clearSearchBtn).not.toBeVisible();

		const searchInput = screen.getByTestId("SearchInput");
		expect(searchInput).toHaveValue("");

		const expectedContent = await screen.findByText(/Money Heist/i);
		expect(expectedContent).toBeVisible();
	});

	test("Check is FilterBtn works correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const filterBtn = screen.getAllByTestId("FilterBtn");

		filterBtn.forEach(btn => {
			expect(btn).toBeVisible();
		});

		await userEvent.click(filterBtn[0]);

		const expectedContent1 = await screen.findByText(/lift/i);
		expect(expectedContent1).toBeVisible();

		const unexpectedContent1 = screen.queryByText(/money heist/i);
		expect(unexpectedContent1).not.toBeInTheDocument();

		await userEvent.click(filterBtn[1]);

		const expectedContent2 = await screen.findAllByText(/john wick/i);
		expect(expectedContent2[0]).toBeVisible();

		const unexpectedContent2 = screen.queryByText(/money heist/i);
		expect(unexpectedContent2).not.toBeInTheDocument();

		await userEvent.click(filterBtn[2]);

		const expectedContent3 = await screen.findByText(/money heist/i);
		expect(expectedContent3).toBeVisible();

		const unexpectedContent3 = screen.queryByText(/john wick/i);
		expect(unexpectedContent3).not.toBeInTheDocument();

		await userEvent.click(filterBtn[3]);

		const expectedContent4 = await screen.findByText(/your name/i);
		expect(expectedContent4).toBeVisible();

		const unexpectedContent4 = screen.queryByText(/money heist/i);
		expect(unexpectedContent4).not.toBeInTheDocument();

		await userEvent.click(filterBtn[4]);

		const expectedContent5 = await screen.findAllByText(/spider-man/i);
		expect(expectedContent5[0]).toBeVisible();

		const unexpectedContent5 = screen.queryByText(/money heist/i);
		expect(unexpectedContent5).not.toBeInTheDocument();
	});

	test("Check is content example works correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const contentTitle = screen.getByText(/money heist/i);
		expect(contentTitle).toBeVisible();

		const contentYear = screen.getAllByText(/Year/i);
		expect(contentYear[0]).toBeVisible();

		const contentRating = screen.getAllByText(/Rating/i);
		expect(contentRating[0]).toBeVisible();

		const contentEpisodes = screen.getAllByText(/Episodes/i);
		expect(contentEpisodes[0]).toBeVisible();

		const contentGenre = screen.getAllByText(/Genre/i);
		expect(contentGenre[0]).toBeVisible();

		const contentDescription = screen.getAllByText(/Description/i);
		expect(contentDescription[0]).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findAllByText(/this has been added/i);
		expect(expectedText[0]).toBeVisible();

		const expandArrow = screen.getAllByTestId("ArrowDownIcon");
		expect(expandArrow[0]).toBeVisible();

		await userEvent.click(expandArrow[0]);

		const collapseArrow = await screen.findAllByTestId("ArrowUpIcon");
		expect(collapseArrow[0]).toBeVisible();
	});

	test("Check is content image preview is showing when click on image", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		const contentImage = screen.getAllByTestId("ContentImage");

		contentImage.forEach(image => {
			expect(image).toBeVisible();
		});

		await userEvent.click(contentImage[0]);

		const isPreview = await screen.findByTestId("PreviewImage");
		expect(isPreview).toBeVisible();

		const closePreview = await screen.findByTestId("CloseImagePreview");
		expect(closePreview).toBeVisible();

		await userEvent.click(closePreview);

		const isPreviewClose = screen.queryByTestId("PreviewImage");
		expect(isPreviewClose).not.toBeInTheDocument();
	});

	test("Check is Go to top arrow works correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		window.scrollTo = vi.fn(options => {
			Object.defineProperty(window, "scrollY", {
				value: options.top,
				writable: true
			});
		});

		Object.defineProperty(window, "scrollY", { value: 1000, writable: true });

		window.dispatchEvent(new Event("scroll"));

		expect(window.scrollY).toBe(1000);

		const goTopButton = await screen.findByTestId("GoArrow");
		expect(goTopButton).toBeVisible();

		await userEvent.click(goTopButton);

		expect(window.scrollTo).toHaveBeenCalledWith({
			top: 0,
			behavior: "smooth"
		});
	});
});
