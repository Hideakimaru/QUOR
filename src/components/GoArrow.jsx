import ArrowIcon from "@mui/icons-material/ArrowUpward";

export default function GoArrow({ onClick }) {
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
