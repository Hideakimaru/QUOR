import Logo from "./Logo";
import DarkMode from "./utils/DarkMode";

export default function Header() {
	return (
		<header className='px-5 flex h-[75px] fixed top-0 z-50 w-full dark:bg-custom-dark-gray bg-slate-950 justify-between items-stretch'>
			<Logo />
			<DarkMode />
		</header>
	);
}
