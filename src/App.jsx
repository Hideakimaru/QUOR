import MainWrapper from "./components/MainWrapper.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef(null);
	gsap.registerPlugin(useGSAP);

	function handleOpen() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	useGSAP(
		() => {
			const headerTl = gsap.timeline();
			gsap.context(() => {
				headerTl.fromTo(
					headerRef.current,
					{ y: -75, opacity: 0 },
					{ y: 0, opacity: 1, duration: 2 }
				);
				headerTl.fromTo(
					"#HEADER__LOGO",
					{ scale: 1.5, opacity: 0 },
					{ scale: 1, opacity: 1 }
				);
			}, headerRef);
		},
		{ scope: headerRef }
	);

	return (
		<>
			{isOpen ? (
				<MobileMenu onClick={handleClose} />
			) : (
				<MainWrapper>
					<Header onClick={handleOpen} headerRef={headerRef} />
					<Outlet />
					<Footer />
				</MainWrapper>
			)}
			<ScrollRestoration />
		</>
	);
}

export default App;
