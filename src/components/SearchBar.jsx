import SearchIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/Clear";
import { useTheme } from "./utils/ThemeHooks";

export default function SearchBar({
	value,
	onChange,
	searchBarRef,
	handleSearchBlur,
	handleSearchClick,
	handleSearchClear,
	isSearch,
	isText
}) {
	const { theme } = useTheme();

	const borderColor = isSearch
		? theme === "dark"
			? "#86efac"
			: "#2ecc71"
		: theme === "dark"
		? "#3f3f3f"
		: "#d1d5db";

	return (
		<div className='flex w-full justify-center'>
			<div
				data-testid='SearchBar'
				onClick={handleSearchClick}
				className='relative py-2 px-5 flex w-full md:w-[500px] flex-row justify-center items-center dark:bg-custom-dark-gray bg-white rounded-lg border-2 font-poppins text-black cursor-text
			 transition duration-500 ease-in-out overflow-hidden'
				style={{
					borderColor: borderColor
				}}
			>
				<div className='mr-1 flex w-[30px] justify-center dark:text-white/87'>
					<SearchIcon sx={{ fontSize: "30px" }} />
				</div>
				<div className='flex w-full'>
					<input
						data-testid='SearchInput'
						ref={searchBarRef}
						onBlur={handleSearchBlur}
						className='flex w-full font-poppins font-light text-xl placeholder:text-xl placeholder:text-slate-500 dark:placeholder:text-white/87 focus:placeholder:opacity-0 dark:bg-custom-dark-gray dark:caret-white/87 dark:text-white/87'
						type='text'
						name='search'
						id='search'
						value={value}
						onChange={onChange}
						placeholder='Search...'
						autoComplete='off'
					/>
				</div>
				{isText ? (
					<div
						data-testid='ClearSearchBtn'
						onClick={handleSearchClear}
						className='absolute p-1 flex right-5 top-auto dark:bg-custom-gray dark:hover:bg-opacity-87 bg-gray-950 hover:bg-opacity-80 rounded-full cursor-pointer active:scale-90'
					>
						<ClearIcon
							sx={{
								color: theme === "dark" ? "rgba(255,255,255, 0.87)" : "#fff",
								fontSize: "20px"
							}}
						/>
					</div>
				) : null}
			</div>
		</div>
	);
}
