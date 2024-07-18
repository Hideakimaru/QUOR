import MovieFilter from "@mui/icons-material/MovieFilter";
import { Link } from "react-router-dom";

function Logo() {
	return (
		<div id='HEADER__LOGO' className='flex w-28 justify-center items-center'>
			<Link
				data-testid='logo'
				to='/'
				className='flex flex-row hover:opacity-80 cursor-pointer'
			>
				<MovieFilter
					data-testid='MovieFilter'
					fontSize='large'
					sx={{ color: "white" }}
				/>
				<h1 className='font-poetsen text-white font-bold text-3xl'>MWL</h1>
			</Link>
		</div>
	);
}

export default Logo;
