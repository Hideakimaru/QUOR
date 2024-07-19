import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkModeRounded";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "./ThemeHooks";

export default function DarkMode() {
	const { theme, setTheme } = useTheme();
	const [isHovered, setIsHovered] = useState(false);
	const [hasMounted, setHasMounted] = useState(false);
	const [isAnimation, setIsAnimation] = useState(false);

	const sunIconRef = useRef(null);
	const moonIconRef = useRef(null);
	const darkModeContainerRef = useRef(null);

	gsap.config({ nullTargetWarn: false });

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
		localStorage.setItem("theme", theme);
	}, [theme]);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	useGSAP(
		() => {
			if (!hasMounted) return;
			let ctx = gsap.context(() => {
				gsap.fromTo(
					sunIconRef.current,
					{
						y: 15,
						opacity: 0,
						rotate: 180
					},
					{
						y: 0,
						opacity: 1,
						rotate: 0,
						duration: 1,
						ease: "power1.out",
						onUpdate: () => {
							setIsAnimation(true);
						},
						onComplete: () => {
							setIsAnimation(false);
						}
					}
				);

				gsap.fromTo(
					moonIconRef.current,
					{
						x: -15,
						opacity: 0,
						rotate: 180
					},
					{
						x: 0,
						opacity: 1,
						rotate: 0,
						duration: 1,
						ease: "power1.out",
						onUpdate: () => {
							setIsAnimation(true);
						},
						onComplete: () => {
							setIsAnimation(false);
						}
					}
				);
			});

			return () => {
				ctx.revert();
			};
		},
		{ dependencies: [theme], scope: darkModeContainerRef }
	);

	function handleModeChange() {
		setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
	}

	function handleMouseEnter() {
		setIsHovered(true);
	}

	function handleMouseLeave() {
		setIsHovered(false);
	}

	const getSunColor = () => {
		if (isHovered || isAnimation) {
			return theme === "light" ? "#fbbf24" : "#fde68a";
		} else {
			return "#fff";
		}
	};

	const getMoonColor = () => {
		if (isHovered || isAnimation) {
			return theme === "light" ? "#3b82f6" : "#bfdbfe";
		} else {
			return "#fff";
		}
	};

	return (
		<div
			onClick={handleModeChange}
			ref={darkModeContainerRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className='flex w-fit justify-center items-center cursor-pointer'
		>
			{theme === "light" ? (
				<LightModeIcon
					ref={sunIconRef}
					sx={{
						color: getSunColor(),
						fontSize: "40px"
					}}
				/>
			) : (
				<DarkModeIcon
					ref={moonIconRef}
					sx={{
						color: getMoonColor(),
						fontSize: "40px"
					}}
				/>
			)}
		</div>
	);
}
