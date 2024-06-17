import { Link } from "react-router-dom";
import ProfileIcon from "@mui/icons-material/AccountCircle";

export default function HomeNav() {
	return (
		<nav className='hidden lg:flex flex-row items-center font-poppins font-bold text-white'>
			<Link className='p-5 hover:bg-slate-700' to='/auth' replace={true}>
				<ProfileIcon fontSize='large' />
			</Link>
		</nav>
	);
}
