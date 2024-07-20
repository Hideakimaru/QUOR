export default function ContentMessage({ searchWords }) {
	return (
		<div className='p-4 mx-auto gap-2 flex flex-wrap flex-col w-full justify-center items-center'>
			<h1 className='font-poppins font-bold text-lg md:text-2xl text-black dark:text-white/87'>
				No content as &laquo;{searchWords}&raquo;
			</h1>
			<p className='font-poppins font-bold text-sm md:text-base text-gray-400 dark:text-gray-300 text-center'>
				Please, try to find something else.
			</p>
		</div>
	);
}
