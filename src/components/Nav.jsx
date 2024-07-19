import { NavLink } from "react-router-dom";
import { useTheme } from "./utils/ThemeHooks";

function NavLinks() {
	const { theme } = useTheme();

	return (
		<>
			<NavLink
				data-testid='navItem1'
				className='p-5 flex h-full items-center dark:text-white/87 text-white dark:hover:text-green-200 hover:text-custom-green'
				to='/app'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? theme === "light"
								? "4px solid #2ecc71"
								: "4px solid #86efac"
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
				className='p-5 flex h-full items-center dark:text-white/87 text-white dark:hover:text-green-200 hover:text-custom-green'
				to='/app/my-list'
				style={({ isActive, isPending }) => {
					return {
						borderBottom: isActive
							? theme === "light"
								? "4px solid #2ecc71"
								: "4px solid #86efac"
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
