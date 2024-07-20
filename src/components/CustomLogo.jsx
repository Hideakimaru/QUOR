import MovieFilter from "@mui/icons-material/MovieFilter";

function Logo() {
	return (
		<div id='HEADER__LOGO' className='flex w-fit justify-center items-center'>
			<div className='flex w-fit justify-center items-center'>
				<MovieFilter
					data-testid='MovieFilter'
					sx={{ color: "white", fontSize: "40px" }}
				/>
			</div>
			<h1 className='font-poetsen dark:text-white/87 text-white font-bold text-3xl'>
				QUOR
			</h1>
		</div>
	);
}

export default Logo;
