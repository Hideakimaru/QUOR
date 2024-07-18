import Logo from "./Logo";

export default function Header() {
	return (
		<header className='px-5 flex h-[75px] fixed top-0 z-50 w-full bg-slate-950 justify-between items-stretch'>
			<Logo />
		</header>
	);
}
