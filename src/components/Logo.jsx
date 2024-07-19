import MovieFilter from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div id='HEADER__LOGO' className='flex w-28 justify-center items-center'>
			<Link
				data-testid='logo'
				to='/'
				className='flex flex-row dark:hover:opacity-67 hover:opacity-80 cursor-pointer'
			>
				<MovieFilter
					className='dark:opacity-87'
					data-testid='MovieFilter'
					fontSize='large'
					sx={{ color: "white" }}
				/>
				<h1 className='font-poetsen dark:text-white/87 text-white font-bold text-3xl'>
					MWL
				</h1>
			</Link>
		</div>
	);
}

export default Logo;
