import PlusIcon from "@mui/icons-material/Add";
import { useTheme } from "./ThemeHooks";

export default function AddEpisodesBtn({ onClick }) {
	const { theme } = useTheme();
	return (
		<button
			data-testid='AddEpisodesBtn'
			onClick={onClick}
			className='flex w-10 h-10 bg-slate-950 dark:bg-custom-gray dark:hover:bg-opacity-67 items-center justify-center rounded-full hover:bg-opacity-90 transition duration-500 ease-in-out active:transition-none active:scale-90 active:bg-opacity-100'
		>
			<PlusIcon
				sx={{ color: theme === "dark" ? "rgba(255, 255, 255, 0.87)" : "#fff" }}
			/>
		</button>
	);
}
