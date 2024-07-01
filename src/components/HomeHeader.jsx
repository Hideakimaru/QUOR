import Logo from "./Logo";
import { BurgerIcon } from "./BurgerMenu.jsx";

export default function Header({ onClick }) {
	return (
		<header className='px-5 flex h-[75px] fixed top-0 z-50 w-full bg-slate-950 justify-between items-stretch'>
			<Logo />
			<div className='flex w-full justify-end items-stretch'>
				<BurgerIcon onClick={onClick} />
			</div>
		</header>
	);
}
