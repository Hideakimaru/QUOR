import { NavLink } from "react-router-dom";

function NavLinks() {
	return (
		<>
			<NavLink
				data-testid='navItem1'
				className='p-5 flex h-full items-center text-white hover:text-custom-green'
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
				data-testid='navItem2'
				className='p-5 flex h-full items-center text-white hover:text-custom-green'
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
		</nav>
	);
}
