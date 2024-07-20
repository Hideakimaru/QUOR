import MainWrapper from "./components/MainWrapper.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import MobileMenu from "./components/MobileMenu.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ScrollTrigger } from "gsap/all";
import { handleOpen, handleClose } from "./components/utils/BurgerHandlers.js";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const headerRef = useRef(null);
	const footerRef = useRef(null);
	const closeBtnRef = useRef(null);

	gsap.registerPlugin(useGSAP);
	gsap.registerPlugin(ScrollTrigger);

	gsap.config({
		nullTargetWarn: false
	});

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

	useGSAP(
		() => {
			let ctx = gsap.context(() => {
				gsap.to(closeBtnRef.current, {
					rotation: 720,
					ease: "power1.out"
				});
			});

			return () => ctx.revert();
		},
		{ dependencies: [isOpen], scope: headerRef }
	);

	useGSAP(
		() => {
			const footerTl = gsap.timeline({
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top bottom",
					toggleActions: "play none none none"
				}
			});

			footerTl.fromTo(
				footerRef.current,
				{ y: 222, opacity: 0 },
				{ y: 0, opacity: 1 }
			);
			footerTl.fromTo(
				".LOGO-TEXT",
				{ rotation: 0, opacity: 0 },
				{ rotation: 720, opacity: 1 }
			);
			footerTl.fromTo(
				".INSTAGRAM",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".KOFI",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".GITHUB",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".MAIL",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(
				".TELEGRAM",
				{ y: 20, opacity: 0 },
				{ y: 0, opacity: 1, ease: true }
			);
			footerTl.fromTo(".LINKS", { opacity: 0 }, { opacity: 1, ease: true });
			footerTl.fromTo(".COPYRIGHT", { opacity: 0 }, { opacity: 1, ease: true });
		},
		{ scope: footerRef }
	);

	function handleLinkClick(e) {
		e.stopPropagation();
		setIsOpen(false);
	}

	return (
		<>
			{isOpen ? (
				<MobileMenu
					onClick={() => handleClose(setIsOpen)}
					closeBtnRef={closeBtnRef}
					onLinkClick={handleLinkClick}
				/>
			) : (
				<MainWrapper>
					<Header onClick={() => handleOpen(setIsOpen)} headerRef={headerRef} />
					<Outlet />
					<Footer footerRef={footerRef} />
				</MainWrapper>
			)}
			<ScrollRestoration />
		</>
	);
}

export default App;
