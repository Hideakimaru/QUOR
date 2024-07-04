import MinusIcon from "@mui/icons-material/Remove";

export default function RemoveEpisodesBtn({ onClick }) {
	return (
		<button
			onClick={onClick}
			className='flex w-10 h-10 bg-slate-950 items-center justify-center rounded-full hover:bg-opacity-90 transition duration-500 ease-in-out active:transition-none active:scale-90 active:bg-opacity-100'
		>
			<MinusIcon sx={{ color: "#fff" }} />
		</button>
	);
}
