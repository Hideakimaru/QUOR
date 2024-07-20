import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import WatchList from "../src/components/WatchList.jsx";
import AddToList from "../src/components/AddToList.jsx";
import App from "../src/App.jsx";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("WatchList", () => {
	window.scrollTo = vi.fn();

	const router = createMemoryRouter(
		[
			{
				path: "app",
				element: <App />,
				children: [
					{ path: "/app", element: <AddToList /> },
					{ path: "my-list", element: <WatchList /> }
				]
			}
		],
		{ initialEntries: ["/app"] }
	);

	test("Check is WatchList render correct", async () => {
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		await new Promise(resolve => setTimeout(resolve, 2000));

		const appTitle = screen.getByText(/watch something new/i);
		expect(appTitle).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findByText(/this has been added/i);
		expect(expectedText).toBeVisible();

		const myListNav = screen.getByTestId("navItem2");
		expect(myListNav).toBeVisible();

		await userEvent.click(myListNav);

		const expectedTitle = await screen.findAllByText(/my list/i);
		expect(expectedTitle[0]).toBeVisible();

		const expectedContent = await screen.findByText(/money heist/i);
		expect(expectedContent).toBeVisible();
	});

	test("Check is UnfoldBtn works correct", async () => {
		router.navigate("/app");
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		await new Promise(resolve => setTimeout(resolve, 2000));

		const appTitle = screen.getByText(/watch something new/i);
		expect(appTitle).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findByText(/this has been added/i);
		expect(expectedText).toBeVisible();

		const myListNav = screen.getByTestId("navItem2");
		expect(myListNav).toBeVisible();

		await userEvent.click(myListNav);

		const expectedTitle = await screen.findAllByText(/my list/i);
		expect(expectedTitle[0]).toBeVisible();

		const expectedContent = await screen.findByText(/money heist/i);
		expect(expectedContent).toBeVisible();

		const unfoldBtn = await screen.findAllByTestId("UnfoldBtn");
		expect(unfoldBtn[1]).toBeVisible();

		await userEvent.click(unfoldBtn[1]);

		const isTitleHide = screen.queryByText(/money heist/i);
		expect(isTitleHide).not.toBeInTheDocument();
	});

	test("Check select change status", async () => {
		router.navigate("/app");
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		await new Promise(resolve => setTimeout(resolve, 2000));

		const appTitle = screen.getByText(/watch something new/i);
		expect(appTitle).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findByText(/this has been added/i);
		expect(expectedText).toBeVisible();

		const myListNav = screen.getByTestId("navItem2");
		expect(myListNav).toBeVisible();

		await userEvent.click(myListNav);

		const expectedTitle = await screen.findAllByText(/my list/i);
		expect(expectedTitle[0]).toBeVisible();

		const expectedContent = await screen.findByText(/money heist/i);
		expect(expectedContent).toBeVisible();

		const selectPlanned = await screen.findAllByText(/Planned/i);
		expect(selectPlanned[0]).toBeVisible();

		await userEvent.click(selectPlanned[0]);

		const optionWatching = await screen.findAllByText(/Watching/i);

		await userEvent.click(optionWatching[0]);

		const selectWatching = await screen.findAllByText(/Watching/i);
		expect(selectWatching[0]).toBeVisible();

		await userEvent.click(selectWatching[0]);

		const optionCompleted = await screen.findAllByText(/Completed/i);

		await userEvent.click(optionCompleted[0]);

		const selectCompleted = await screen.findAllByText(/Completed/i);
		expect(selectCompleted[0]).toBeVisible();
	});

	test("Check is episodes counter works correct", async () => {
		router.navigate("/app");
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		await new Promise(resolve => setTimeout(resolve, 2000));

		const appTitle = screen.getByText(/watch something new/i);
		expect(appTitle).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findByText(/this has been added/i);
		expect(expectedText).toBeVisible();

		const myListNav = screen.getByTestId("navItem2");
		expect(myListNav).toBeVisible();

		await userEvent.click(myListNav);

		const expectedTitle = await screen.findAllByText(/my list/i);
		expect(expectedTitle[0]).toBeVisible();

		const expectedContent = await screen.findByText(/money heist/i);
		expect(expectedContent).toBeVisible();

		const addEpisodesBtn = await screen.findAllByTestId("AddEpisodesBtn");
		expect(addEpisodesBtn[0]).toBeVisible();

		await userEvent.click(addEpisodesBtn[0]);

		const expectedCount = await screen.findByTestId("EpisodesCounter");
		expect(expectedCount).toHaveTextContent("1 / 9");

		const removeEpisodesBtn = await screen.findAllByTestId("RemoveEpisodesBtn");
		expect(removeEpisodesBtn[0]).toBeVisible();

		await userEvent.click(removeEpisodesBtn[0]);

		expect(expectedCount).toHaveTextContent("0 / 9");

		for (let index = 0; index < 9; index++) {
			await userEvent.click(addEpisodesBtn[0]);
		}

		const expectedMessage = await screen.findByText(
			/You have watched all the episodes/i
		);
		expect(expectedMessage).toBeVisible();
	});

	test("Check is content removed on remove btn click", async () => {
		router.navigate("/app");
		render(
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		);

		await new Promise(resolve => setTimeout(resolve, 2000));

		const appTitle = screen.getByText(/watch something new/i);
		expect(appTitle).toBeVisible();

		const addContentBtn = screen.getAllByTestId("AddContentBtn");
		expect(addContentBtn[0]).toBeVisible();

		await userEvent.click(addContentBtn[0]);

		const expectedText = await screen.findByText(/this has been added/i);
		expect(expectedText).toBeVisible();

		const myListNav = screen.getByTestId("navItem2");
		expect(myListNav).toBeVisible();

		await userEvent.click(myListNav);

		const expectedTitle = await screen.findAllByText(/my list/i);
		expect(expectedTitle[0]).toBeVisible();

		const expectedContent = await screen.findByText(/money heist/i);
		expect(expectedContent).toBeVisible();

		const removeBtn = screen.getByTestId("RemoveButton");
		expect(removeBtn).toBeVisible();

		await userEvent.click(removeBtn);

		const deletedContent = screen.queryByText(/money heist/i);
		expect(deletedContent).not.toBeInTheDocument();

		const noContentMessage = await screen.findByText(
			/You haven't content yet/i
		);
		expect(noContentMessage).toBeVisible();
	});
});
