import { NavLink } from "react-router-dom";
import { useTheme } from "./utils/ThemeHooks";

function NavLinks() {
	const { theme } = useTheme();

	return (
		<>
			<NavLink
				data-testid='navItem1'
				className='p-5 flex h-full items-center dark:text-white/87 text-white hover:text-green-600 dark:hover:text-green-600'
				to='/app'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? "4px solid #22c55e"
							: isPending
							? "none"
							: "",
						backgroundColor: isActive
							? theme === "light"
								? "#1e293b"
								: "#3f3f3f"
							: ""
					};
				}}
				end
			>
				Add
			</NavLink>
			<NavLink
				data-testid='navItem2'
				className='p-5 flex h-full items-center dark:text-white/87 text-white hover:text-green-600 dark:hover:text-green-600'
				to='/app/my-list'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? "4px solid #22c55e"
							: isPending
							? "none"
							: "",
						backgroundColor: isActive
							? theme === "light"
								? "#1e293b"
								: "#3f3f3f"
							: ""
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
