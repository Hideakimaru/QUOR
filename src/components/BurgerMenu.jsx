export function BurgerIcon({ onClick }) {
	return (
		<button
			data-testid='burgerOpen'
			onClick={onClick}
			className='flex lg:hidden flex-col justify-center w-7 h-auto cursor-pointer ease-in-out hover:opacity-80'
		>
			<span className='flex relative w-full h-[3px] bg-white before:content-[""] before:absolute before:-top-2 before:w-full before:h-[3px] before:bg-white after:content-[""] after:absolute after:top-2 after:w-full after:h-[3px] after:bg-white'></span>
		</button>
	);
}

export function X({ onClick, closeBtnRef }) {
	return (
		<button
			ref={closeBtnRef}
			data-testid='burgerClose'
			onClick={onClick}
			className='w-7 h-7 cursor-pointer ease-in-out hover:opacity-80 dark:hover:opacity-67'
		>
			<span className='flex relative w-full justify-center h-[3px] bg-white dark:bg-white/87 rotate-45 after:absolute after:content-[""] after:w-full after:h-[3px] after:bg-white after:-rotate-90'></span>
		</button>
	);
}
