export default function HomePageTitle({ appName }) {
	return (
		<div className='title gap-3 md:gap-5 flex flex-col w-full justify-center items-center font-poppins'>
			<h1 className='font-bold text-3xl md:text-5xl text-black dark:text-white/87'>
				Welcome to {appName}!
			</h1>
			<p className='italic text-sm md:text-base text-gray-600 dark:text-gray-300'>
				Everything you like to watch in one place.
			</p>
		</div>
	);
}
