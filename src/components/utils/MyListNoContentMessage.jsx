export default function MyListNoContentMessage({ text }) {
	return (
		<div className='flex w-full justify-center'>
			<h1 className='font-poppins font-bold text-slate-500 text-sm md:text-base '>
				{text}
			</h1>
		</div>
	);
}
