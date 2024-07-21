export default function Title({ text }) {
	return (
		<div className='flex w-full justify-center px-3 py-5 md:p-10'>
			<h1 className='font-light font-poppins text-xl sm:text-3xl md:text-4xl dark:text-white/87 text-black uppercase'>
				{text}
			</h1>
		</div>
	);
}
