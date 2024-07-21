import ArrowIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";

function ArrowButton({ onClick }) {
	return (
		<button
			data-testid='GoArrow'
			onClick={onClick}
			className='z-[10000] flex fixed bottom-10 right-3 md:bottom-16 md:right-10 w-12 h-12 bg-green-600 dark:bg-green-500 justify-center items-center rounded-full font-poppins text-white bg-opacity-80 dark:bg-opacity-38 hover:bg-opacity-100 dark:hover:bg-opacity-100 hover:transition hover:duration-500 hover:ease-in-out'
		>
			<ArrowIcon fontSize='medium' />
		</button>
	);
}

export default function GoArrow({ isPrivew }) {
	const [isShow, setIsShow] = useState(false);

	useEffect(() => {
		if (isPrivew) {
			setIsShow(false);
		} else if (window.scrollY === 0) {
			setIsShow(false);
		} else {
			setIsShow(true);
		}
	}, [isPrivew]);

	function handleClick(e) {
		e.stopPropagation();
		window.scrollTo({ top: 0, behavior: "smooth" });
	}

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 150) {
				setIsShow(true);
			} else {
				setIsShow(false);
			}
		});
	}, []);

	return <>{isShow && <ArrowButton onClick={handleClick} />}</>;
}
