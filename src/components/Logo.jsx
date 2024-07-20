import MovieFilter from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div id='HEADER__LOGO' className='flex w-fit justify-center items-center'>
			<Link
				data-testid='logo'
				to='/'
				className='flex flex-row dark:hover:opacity-67 hover:opacity-80 cursor-pointer'
			>
				<div className='flex w-fit justify-center items-center'>
					<MovieFilter
						className='dark:opacity-87'
						data-testid='MovieFilter'
						sx={{ color: "white", fontSize: "40px" }}
					/>
				</div>
				<h1 className='font-poetsen dark:text-white/87 text-white font-bold text-3xl'>
					QUOR
				</h1>
			</Link>
		</div>
	);
}

export default Logo;
