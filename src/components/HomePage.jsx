import "../output.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import HomeHeader from "./HomeHeader.jsx";
import HomePageTitle from "./utils/HomePageTitle";

export default function HomePage() {
	const homePageRef = useRef(null);

	useLayoutEffect(() => {
		const tl = gsap.timeline();
		gsap.context(() => {
			tl.fromTo(
				".title",
				{ y: -300, opacity: 0 },
				{ y: 0, opacity: 1, duration: 2 }
			);
			tl.fromTo(".btn", { opacity: 0 }, { opacity: 1, duration: 2 });
		}, homePageRef);
	}, []);

	function handleBtnHover() {
		gsap.killTweensOf(".btn");
		gsap.killTweensOf(".title");
		gsap.to(".title", { y: 0, opacity: 1 });
		gsap.to(".btn", { opacity: 1 });
	}

	return (
		<div
			ref={homePageRef}
			className='p-2 md:p-5 flex flex-col mx-auto w-full h-screen gap-5 md:gap-10 items-center justify-center'
		>
			<HomeHeader />
			<HomePageTitle appName='QUOR' />
			<Link
				data-testid='GetStartedBtn'
				onMouseEnter={handleBtnHover}
				to='/app'
				className='btn py-4 px-2 flex justify-center w-40 dark:bg-custom-gray bg-slate-950 dark:text-white/87 text-white font-bold text-base md:text-xl rounded-lg hover:bg-gradient-to-r hover:from-purple-600 hover:to-green-600 dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:to-green-500 dark:hover:text-white/87'
			>
				Get Started
			</Link>
		</div>
	);
}
