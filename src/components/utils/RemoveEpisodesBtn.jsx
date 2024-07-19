import MinusIcon from "@mui/icons-material/Remove";
import { useTheme } from "./ThemeHooks";

export default function RemoveEpisodesBtn({ onClick }) {
	const { theme } = useTheme();
	return (
		<button
			data-testid='RemoveEpisodesBtn'
			onClick={onClick}
			className='flex w-10 h-10 bg-slate-950 dark:bg-custom-gray items-center justify-center rounded-full hover:bg-opacity-90 transition duration-500 ease-in-out active:transition-none active:scale-90 active:bg-opacity-100'
		>
			<MinusIcon
				sx={{ color: theme === "dark" ? "rbga(255, 255, 255, 0.87)" : "#fff" }}
			/>
		</button>
	);
}
