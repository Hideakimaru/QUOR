import ArrowIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from "react";

function ArrowButton({ onClick }) {
	return (
		<button
			onClick={onClick}
			className='z-[10000] flex fixed bottom-10 right-3 md:bottom-16 md:right-10 w-12 h-12 bg-custom-green justify-center items-center rounded-full font-poppins text-white bg-opacity-80 hover:bg-opacity-100 hover:transition hover:duration-500 hover:ease-in-out'
		>
			<ArrowIcon fontSize='medium' />
		</button>
	);
}

export default function GoArrow() {
	const [isShow, setIsShow] = useState(false);
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
