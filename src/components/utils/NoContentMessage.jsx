import { Link } from "react-router-dom";
export default function NoContentMessage() {
	return (
		<div className='p-3 md:p-5 gap-4 flex flex-col w-full h-full justify-center items-center'>
			<h1 className='font-poppins font-bold text-base sm:text-2xl md:text-4xl text-black dark:text-white/87'>
				You haven&apos;t content yet😔
			</h1>
			<Link
				className='font-poppins font-bold text-sm sm:text-lg md:text-2xl text-green-600 dark:text-green-500 underline hover:no-underline hover:transition hover:duration-500 hover:ease-in-out'
				to='/app'
			>
				Take something!
			</Link>
		</div>
	);
}
