import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Footer from "../src/components/Footer.jsx";
import userEvent from "@testing-library/user-event";
import InstagramIcon from "@mui/icons-material/Instagram.js";
import { ThemeProvider } from "../src/components/utils/ThemeContext.jsx";

describe("Footer", () => {
	test("Check is texts is visible", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const logoText = screen.getByText(/QUOR/i);
		expect(logoText).toBeVisible();

		const privacyText = screen.getByText(/Privacy Policy/i);
		expect(privacyText).toBeVisible();

		const termsText = screen.getByText(/Terms/i);
		expect(termsText).toBeVisible();

		const copyrightText = screen.getByText(/Copyright/i);
		expect(copyrightText).toBeVisible();
	});

	test("Check is all footer icons visible", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const instaIcon = screen.getByTestId("InstagramIcon");
		expect(instaIcon).toBeVisible();

		const kofiIcon = screen.getByTestId("KofiIcon");
		expect(kofiIcon).toBeVisible();

		const githubIcon = screen.getByTestId("GithubIcon");
		expect(githubIcon).toBeVisible();

		const mailIcon = screen.getByTestId("MailIcon");
		expect(mailIcon).toBeVisible();

		const telegramIcon = screen.getByTestId("TelegramIcon");
		expect(telegramIcon).toBeVisible();
	});

	test("Check is footer Logo redirect to correct route", async () => {
		render(
			<MemoryRouter initialEntries={["/app"]}>
				<Routes>
					<Route path='/' element={<div>Page Home</div>} />
					<Route path='/app' element={<Footer />} />
				</Routes>
			</MemoryRouter>
		);

		const footerLogo = screen.getByText(/QUOR/i);
		expect(footerLogo).toBeVisible();

		await userEvent.click(footerLogo);

		const expectedText = await screen.findByText(/Page Home/i);
		expect(expectedText).toBeVisible();
	});

	test("Check is socials change state on hover", async () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const instaIcon = screen.getByTestId("InstagramIcon");
		expect(instaIcon).toBeVisible();

		await userEvent.hover(instaIcon);

		expect(instaIcon).toHaveClass("hover:text-custom-green");

		const kofiIcon = screen.getByTestId("KofiIcon");
		expect(kofiIcon).toBeVisible();

		await userEvent.hover(kofiIcon);

		expect(kofiIcon).toHaveClass("hover:text-custom-green");

		const githubIcon = screen.getByTestId("GithubIcon");
		expect(githubIcon).toBeVisible();

		await userEvent.hover(githubIcon);

		expect(githubIcon).toHaveClass("hover:text-custom-green");

		const mailIcon = screen.getByTestId("MailIcon");
		expect(mailIcon).toBeVisible();

		await userEvent.hover(mailIcon);

		expect(mailIcon).toHaveClass("hover:text-custom-green");

		const telegramIcon = screen.getByTestId("TelegramIcon");
		expect(telegramIcon).toBeVisible();

		await userEvent.hover(telegramIcon);

		expect(telegramIcon).toHaveClass("hover:text-custom-green");
	});

	test("Check is socials have correct redirect url", () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);
		const instaIcon = screen.getByTestId("InstagramLink");
		expect(instaIcon).toBeInTheDocument();
		expect(instaIcon).toHaveAttribute(
			"href",
			"https://www.instagram.com/quorsupport/"
		);

		const kofiIcon = screen.getByTestId("KofiLink");
		expect(kofiIcon).toBeInTheDocument();
		expect(kofiIcon).toHaveAttribute("href", "https://ko-fi.com/quorwebapp");

		const githubIcon = screen.getByTestId("GithubLink");
		expect(githubIcon).toBeInTheDocument();
		expect(githubIcon).toHaveAttribute(
			"href",
			"https://github.com/Hideakimaru/MyWatchList"
		);

		const mailIcon = screen.getByTestId("MailLink");
		expect(mailIcon).toBeInTheDocument();
		expect(mailIcon).toHaveAttribute("href", "mailto:quor.assist@gmail.com");

		const telegramIcon = screen.getByTestId("TelegramLink");
		expect(telegramIcon).toBeInTheDocument();
		expect(telegramIcon).toHaveAttribute("href", "https://t.me/QuorSupportBot");
	});

	test("Check Instagram icon href attribute", () => {
		render(
			<a className='INSTAGRAM' href='https://www.instagram.com/quorsupport/'>
				<InstagramIcon
					data-testid='InstagramIcon'
					className='hover:text-custom-green hover:transition hover:duration-500 hover:ease-in-out'
					fontSize='medium'
				/>
			</a>
		);

		const instaIcon = screen.getByTestId("InstagramIcon");
		expect(instaIcon.closest("a")).toHaveAttribute(
			"href",
			"https://www.instagram.com/quorsupport/"
		);
	});

	test("Check is Privacy and Terms change state on hover", async () => {
		render(
			<MemoryRouter>
				<Footer />
			</MemoryRouter>
		);

		const privicyText = screen.getByText(/Privacy Policy/i);
		expect(privicyText).toBeVisible();

		await userEvent.hover(privicyText);

		expect.toHaveClass("after:bg-white");
		expect.toHaveClass("after:w-0");
		expect.toHaveClass("after:h-[2px]");
		expect.toHaveClass("hover:after:w-full");

		const termsText = screen.getByText(/Terms/i);
		expect(termsText).toBeVisible();

		await userEvent.hover(termsText);

		expect.toHaveClass("after:bg-white");
		expect.toHaveClass("after:w-0");
		expect.toHaveClass("after:h-[2px]");
		expect.toHaveClass("hover:after:w-full");
	});

	test("Check is Privacy redirect to correct route", async () => {
		render(
			<MemoryRouter initialEntries={["/app"]}>
				<Routes>
					<Route path='/app' element={<Footer />} />
					<Route path='/privacy-policy' element={<div>Page Privacy</div>} />
				</Routes>
			</MemoryRouter>
		);

		const privacyLink = screen.getByText(/Privacy Policy/i);
		expect(privacyLink).toBeVisible();

		await userEvent.click(privacyLink);

		const expectedPage = await screen.findByText(/Page Privacy/i);
		expect(expectedPage).toBeVisible();
	});

	test("Check is Terms redirect to correct route", async () => {
		render(
			<MemoryRouter initialEntries={["/app"]}>
				<Routes>
					<Route path='/app' element={<Footer />} />
					<Route path='/privacy-policy' element={<div>Page Terms</div>} />
				</Routes>
			</MemoryRouter>
		);

		const termsLink = screen.getByText(/Privacy Policy/i);
		expect(termsLink).toBeVisible();

		await userEvent.click(termsLink);

		const expectedPage = await screen.findByText(/Page Terms/i);
		expect(expectedPage).toBeVisible();
	});
});
