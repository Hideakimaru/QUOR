import { NavLink, Link } from "react-router-dom";
import ProfileIcon from "@mui/icons-material/AccountCircle";

function NavLinks() {
	return (
		<>
			<NavLink
				className='p-5 flex h-full items-center hover:text-custom-green'
				to='/app'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? "4px solid #2ecc71"
							: isPending
							? "none"
							: "",
						backgroundColor: isActive ? "#1e293b" : ""
					};
				}}
				end
			>
				Add
			</NavLink>
			<NavLink
				className='p-5 flex h-full items-center hover:text-custom-green'
				to='/app/my-list'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? "4px solid #2ecc71"
							: isPending
							? "none"
							: "",
						backgroundColor: isActive ? "#1e293b" : ""
					};
				}}
				end
			>
				My List
			</NavLink>
		</>
	);
}

export default function Nav() {
	return (
		<nav className='hidden lg:flex flex-row items-center font-poppins font-bold text-white'>
			<NavLinks />
			<Link className='p-5 hover:bg-slate-700' to='/auth' replace={true}>
				<ProfileIcon fontSize='large' />
			</Link>
		</nav>
	);
}
