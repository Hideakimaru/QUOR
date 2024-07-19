import Logo from "./Logo";
import { BurgerIcon } from "./BurgerMenu";
import Nav from "./Nav.jsx";
import DarkMode from "./utils/DarkMode";

export default function Header({ onClick, headerRef }) {
	return (
		<header
			data-testid='header'
			ref={headerRef}
			className='px-3 py-5 lg:py-0 lg:px-5 flex fixed top-0 z-50 w-full dark:bg-custom-dark-gray bg-slate-950 justify-between items-stretch'
		>
			<Logo />
			<div className='gap-2 flex w-full justify-end items-stretch'>
				<Nav />
				<DarkMode />
				<BurgerIcon onClick={onClick} />
			</div>
		</header>
	);
}
