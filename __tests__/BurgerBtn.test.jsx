import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { BurgerIcon, X } from "../src/components/BurgerMenu.jsx";
import {
	handleOpen,
	handleClose
} from "../src/components/utils/BurgerHandlers.js";
import MobileMenu from "../src/components/MobileMenu.jsx";
import Header from "../src/components/Header.jsx";

describe("App", () => {
	test("Check is BurgerBtn works correct", async () => {
		const handleOpenMock = vi.fn(() => handleOpen(setIsOpenMock));
		const setIsOpenMock = vi.fn();

		const handleCloseMock = vi.fn(() => handleClose(setIsCloseMock));
		const setIsCloseMock = vi.fn();

		render(
			<MemoryRouter>
				<BurgerIcon onClick={handleOpenMock(setIsOpenMock)} />
				<X onClick={handleCloseMock} />
			</MemoryRouter>
		);

		const burgerBtn = screen.getByTestId("burgerOpen");
		expect(burgerBtn).toBeVisible();

		await userEvent.click(burgerBtn);

		expect(handleOpenMock).toBeCalledTimes(1);

		const closeBtn = screen.getByTestId("burgerClose");
		expect(closeBtn).toBeVisible();

		await userEvent.click(closeBtn);

		expect(handleCloseMock).toBeCalledTimes(1);
	});

	test("Check is burgerBtn and Close btn change state on hover", async () => {
		render(
			<MemoryRouter>
				<MobileMenu />
				<Header />
			</MemoryRouter>
		);

		const closeBtn = screen.getByTestId("burgerClose");
		expect(closeBtn).toBeVisible();

		await userEvent.hover(closeBtn);

		expect(closeBtn).toHaveClass("hover:opacity-80");

		const openBtn = screen.getByTestId("burgerOpen");
		expect(openBtn).toBeVisible();

		await userEvent.hover(openBtn);
		expect(openBtn).toHaveClass("hover:opacity-80");
	});
});
