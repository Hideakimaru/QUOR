import Logo from "./Logo";
import { BurgerIcon } from "./BurgerMenu";
import Nav from "./Nav.jsx";

export default function Header({ onClick, headerRef }) {
	return (
		<header
			ref={headerRef}
			className='px-3 py-5 lg:py-0 lg:px-5 flex fixed top-0 z-50 w-full bg-slate-950 justify-between items-stretch'
		>
			<Logo />
			<div className='flex w-full justify-end items-stretch'>
				<Nav />
				<BurgerIcon onClick={onClick} />
			</div>
		</header>
	);
}
