import SearchIcon from "@mui/icons-material/SearchRounded";
import ClearIcon from "@mui/icons-material/Clear";

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
	return (
		<div className=' flex w-full justify-center'>
			<div
				onClick={handleSearchClick}
				className=' relative py-2 px-5 flex w-full md:w-[500px] flex-row justify-center items-center bg-white rounded-lg border-2 border-slate-950 font-poppins text-black cursor-text
			 transition duration-500 ease-in-out overflow-hidden'
				style={{
					borderColor: isSearch ? "#2ecc71" : ""
				}}
			>
				<div className='mr-1 flex w-[30px] justify-center'>
					<SearchIcon sx={{ fontSize: "30px" }} />
				</div>
				<div className='flex w-full'>
					<input
						ref={searchBarRef}
						onBlur={handleSearchBlur}
						className='flex w-full font-poppins font-light text-xl placeholder:text-xl placeholder:text-slate-500 focus:placeholder:opacity-0'
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
						onClick={handleSearchClear}
						className='absolute p-1 flex right-5 top-auto bg-gray-950 hover:bg-opacity-80 rounded-full cursor-pointer active:scale-90'
					>
						<ClearIcon sx={{ color: "#fff", fontSize: "20px" }} />
					</div>
				) : null}
			</div>
		</div>
	);
}
