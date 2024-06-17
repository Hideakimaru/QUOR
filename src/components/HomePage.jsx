import "../output.css";
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import HomeHeader from "./HomeHeader.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function HomePage() {
	const homePageRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

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

	function handleOpen() {
		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
	}

	return (
		<>
			{isOpen ? (
				<MobileMenu onClick={handleClose} />
			) : (
				<div
					ref={homePageRef}
					className='p-2 md:p-5 flex flex-col mx-auto w-full h-screen gap-5 md:gap-10 items-center justify-center'
				>
					<HomeHeader onClick={handleOpen} />
					<div className='title flex flex-col md:flex-row md: gap-[5px] w-full justify-center items-center font-poppins font-bold text-3xl md:text-5xl'>
						<h1>Welcome to</h1>
						<h2 className='flex flex-row items-center gap-2'>
							My Watch List
							<MovieIcon fontSize='large' />
						</h2>
					</div>
					<Link
						onMouseEnter={handleBtnHover}
						to='/app'
						className='btn py-4 px-2 flex justify-center w-40 bg-slate-950 text-white font-bold text-base  md:text-xl rounded-lg hover:bg-gradient-to-r hover:from-purple-500 hover:to-green-500'
					>
						Get Started
					</Link>
				</div>
			)}
		</>
	);
}
